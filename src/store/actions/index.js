
'use strict';

import _ from 'lodash';
import * as types from '../types';

const actions = {
    [types.INIT_CONNECT] ( {dispatch, commit} ) {
        commit(types['INIT_CONNECT'])
        dispatch(types['USER_ENTER'], {
            chatid,
            curid
        })
    },

    [types.USER_ENTER] ( {state}, {chatid, curid} ) {
        state.socket.send(JSON.stringify({
            "type" : "huid",
            "content" : chatid + "|" + curid
        }));
    },

    [types.RECEIVE_MSG] ( { state, dispatch, commit }, data ) {
        switch ( data.type ) {
            case 'ulist' :
                if ( data.leave ) {
                    commit(types.PERSON_LEAVE, data.leave);
                } else {
                    dispatch(types.USER_LIST, data);
                    if ( state.firstRender && state.curChat) {
                        state.firstRender = false;
                        dispatch(types.RENDER_HISTROY, data);
                    }
                }
                break;
            case 'chat' :
                if ( data.ishit) {
                    dispatch(types.RENDER_HISTROY, data);
                } else {
                    dispatch(types.RECEIVE_MESSAGE, data);
                }
        }
    },

    [types.USER_LIST] ( {commit}, payload ) {
        commit(types['USER_LIST'], payload)
    },

    [types.CHNAGE_USER] ( {commit}, name ) {
        commit(types['CHNAGE_USER'], name);
    },

    [types.NOT_READ] ( {state, commit}, payload ) {
        commit(types['NOT_READ'], payload)
    },

    [types.SET_ALLREAD] ( {state, commit} ) {
        state.socket.send(JSON.stringify({
            "type" : "smsg",
            "action" : "allread",
            "curid" : curid,
            "content" : chatid + "|" + state.curChat,
        }));
    },

    [types.GET_MESSAGE] ( {state, commit} ) {
        state.socket.send(JSON.stringify({
            "type" : "smsg",
            "curid" : curid,
            "content" : chatid + "|" + state.curChat
        }));
        commit(types.SET_ISREAD);
    },

    [types.SEND_MESSAGE] ( {state, commit}, msg ) {
        state.socket.send(JSON.stringify({
            "type" : "smsg",
            "curid" : curid,
            "content" : chatid + "|" + state.curChat,
            "message" : msg
        }));
    },

    [types.RECEIVE_MESSAGE] ( {commit}, payload) {
        commit(types.RECEIVE_MESSAGE, payload);
    },

    [types.RENDER_HISTROY] ( {state, commit}, payload) {
        if ( payload.type === 'ulist' ) {
            commit(types.RENDER_HISTROY, _.filter(_.filter(payload.message[chatid], ["name", curid])[0].history, ['name', state.curChat])[0].data)
        } else {
            let mdata = [];
            if ( payload.msg ) {
                try{
                    mdata = JSON.parse(payload.msg).data
                } catch( err ) {
                    console.error(err);
                }
            }
            commit(types.RENDER_HISTROY, mdata);
        }
    }
}

export default actions;