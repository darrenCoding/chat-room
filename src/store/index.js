
'use strict';

import Vuex from 'vuex';
import Vue from 'vue';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import socketPlugin from './plugins';

Vue.use(Vuex);

export default function store ( sock ) {
    return new Vuex.Store({
        state,
        actions,
        mutations,
        getters,
        plugins: [socketPlugin(sock)]
    });
}