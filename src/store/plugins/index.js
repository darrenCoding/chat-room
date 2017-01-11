
'use strict';

import { RECEIVE_MSG } from '../types';

export default function socketPlugin ( socket ) {
    return store => {
        socket.onmessage = (e) => {
            let obj;
            try{
                obj = JSON.parse(e.data);
            }catch(e){
                console.error(e);
            }
            store.dispatch(RECEIVE_MSG, obj);
        }
        store.state.socket = socket;

        store.subscribe(mutation => {

        })
    }
}