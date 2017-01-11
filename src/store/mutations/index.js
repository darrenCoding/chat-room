
'use strict';

import _ from 'lodash';
import * as types from '../types';

const mutations = {
    [types.INIT_CONNECT] ( state ) {
        state.isConnect = true;
    },

    [types.CHANGE_PANEL] ( state, payload ) {
        state.isWindow = payload;
    },

    [types.USER_LIST] ( state, { message, real, del } ) {
        real.forEach((user) => {
            let _readnum = 0;
            _.find(user.history, ( obj ) => {
                if ( obj.name === curid ) {
                    _readnum = _.filter(obj.data, ['isread', false]).length
                }
            });
            if ( user.name != curid && !(user.name in state.unreadObj) && _readnum) {
                state.unreadObj[user.name] = _readnum;
            }
            state.userList.push({
                name : user.name,
                readnum : _readnum
            })
            state.statusObj[user.name] = true;
        })

        if ( !state.curChat && state.userList.length ) {
            let _narr = state.userList.filter((user) => user.name != curid);
            if ( _narr.length ) {
                state.curChat = _narr[0].name
            }
        }
    },

    [types.CHNAGE_USER] ( state, name ) {
        state.curChat = name;
        state.clearInput = true;
    },

    [types.NOT_READ] ( state, { type, num } ) {
        if ( type === 'minus' ) {
            if ( state.notRead ) {
                state.notRead -= (+num);
            }
        } else {
            state.notRead += (+num);
        }
    },

    [types.RECEIVE_MESSAGE] ( state, { oid, msg} ) {
        if ( oid === state.curChat ) {
            state.msgNum++;
            state.msgList.push(msg);
        } else {
            state.notRead++;
            if ( !(oid in state.unreadObj) ) {
                state.unreadObj[oid] = 1
            } else {
                state.unreadObj[oid]++
            }
        }
    },

    [types.RENDER_HISTROY] ( state, msg ) {
        state.historyList = msg;
    },

    [types.SET_ISREAD] ( state ) {
        delete state.unreadObj[state.curChat]
    },

    [types.PERSON_LEAVE] ( state, person ) {
        state.statusObj[person] = false;
    }
}

export default mutations;