
'use strict';

import Vue from 'vue';
import SockJS from 'sockjs-client';
import Chat from './Chat.vue';
import './filter';
import storeInit from './store';
import * as types from './store/types';
import {timeFormat, formatDate} from './deps/util';


function GetRequest() {  
  var url = location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      var strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}

window.curid = window.curid || GetRequest()["uid"];
window.chatid = window.chaid || GetRequest()["chatid"];

let store;

let sockInit = () => {
	return new Promise((resolve, reject) => {
		let sock = new SockJS('http://localhost:8030/sock');
		sock.onopen = () => {
		    resolve(sock);
		};
		sock.onclose = (err) => {
			reject(err)
		};
	})
}

sockInit().then((sock) => {
	let root = new Vue({
	  store : (store = storeInit(sock)),
	  components: { Chat },
	  mounted () {
		store.dispatch(types['INIT_CONNECT'])
	  }
	}).$mount('#app');
}, (error) => {
	console.error(`[SOCKET ERROR] time : ${timeFormat(new Date(error.timeStamp))} || msg : ${error.reason}`);
})
