webpackJsonp([2,0],{0:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}function s(){var t=location.search,e=new Object;if(t.indexOf("?")!=-1)for(var n=t.substr(1),r=n.split("&"),a=0;a<r.length;a++)e[r[a].split("=")[0]]=r[a].split("=")[1];return e}var i=n(188),o=a(i),u=n(7),c=a(u),l=n(96),d=a(l),f=n(124),_=a(f);n(178);var p=n(181),m=a(p),v=n(12),h=r(v),E=n(18);window.curid=window.curid||s().uid,window.chatid=window.chaid||s().chatid;var g=void 0,C=function(){return new o.default(function(t,e){var n=new d.default("http://localhost:8030/sock");n.onopen=function(){t(n)},n.onclose=function(t){e(t)}})};C().then(function(t){new c.default({store:g=(0,m.default)(t),components:{Chat:_.default},mounted:function(){g.dispatch(h.INIT_CONNECT)}}).$mount("#app")},function(t){console.error("[SOCKET ERROR] time : "+(0,E.timeFormat)(new Date(t.timeStamp))+" || msg : "+t.reason)})},12:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.INIT_CONNECT="socket/INIT_CONNECT",e.USER_ENTER="socket/USER_ENTER",e.RECEIVE_MSG="sock/RECEIVE_MSG",e.USER_LIST="sock/USER_LIST",e.CHNAGE_USER="sock/CHNAGE_USER",e.NOT_READ="sock/NOT_READ",e.GET_MESSAGE="sock/GET_MESSAGE",e.SEND_MESSAGE="sock/SEND_MESSAGE",e.RENDER_HISTROY="sock/RENDER_HISTROY",e.RECEIVE_MESSAGE="sock/RECEIVE_MESSAGE",e.SET_ISREAD="sock/SET_ISREAD",e.PERSON_LEAVE="sock/PERSON_LEAVE",e.SET_ALLREAD="sock/SET_ALLREAD"},18:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t){var e="";return e+=[t.getFullYear(),t.getMonth()+1,t.getDate()].join("-")+" ",e+=[t.getHours(),t.getMinutes(),t.getSeconds()].join(":")}function s(t,e){return t.classList?t.classList.contains(e):new RegExp("(\\s|^)"+e+"(\\s|$)").test(t.className)}function i(t,e){s(t,e)||(t.className+=" "+e)}function o(t,e){var n=(0,S.default)(t);n.length?n.forEach(function(t){o(t,e)}):s(t,e)&&(t.className=t.className.replace(RegExp("(\\s|^)"+e+"(\\s|$)"),""))}function u(t,e,n){return b.default.unionBy(t,e,n)}function c(t){if(t){var e=new Date(t);return(e.getMonth()+1+"月"+e.getDate()+"日"+e.getHours()+":"+e.getMinutes()).replace(/([\-\: ])(\d{1})(?!\d)/g,"$10$2")}}function l(t){var e="undefined"==typeof t?"undefined":(0,C.default)(t);return"object"!==e?e:N.call(t).replace(j,"$1").toLowerCase()}function d(t,e){e=(0,S.default)(e);for(var n=e.length-1;n>=0;n--)t.removeChild(e[n])}function f(t,e){if(t.currentStyle){var n=t.currentStyle[e];if("height"===e&&1!==n.search(/px/i)){var r=t.getBoundingClientRect();return r.bottom-r.top-parseFloat(f("paddingTop"))-parseFloat(f("paddingBottom"))+"px"}return n}return getComputedStyle(t,null)[e]}function _(){var t=void 0;return t=!!document.getBoxObjectFor||"mozInnerScreenX"in window}function p(t){return"number"==typeof t&&isFinite(t)?t:0}function m(t){t.scrollTop=t.scrollHeight-t.clientHeight}function v(t){for(var e=0,n=t.length,r=-1,a=0;a<n;a++)r=t.charCodeAt(a),e+=r>=0&&r<=128?1:2;return e}function h(t,e){for(var n=0,r=t.length,a=new String,s=0;s<r;s++){var i=t.charAt(s);if(n++,escape(i).length>4&&n++,a=a.concat(i),n>=e)return a}if(n<e)return t}function E(t,e){var n=document.createElement("div"),r=document.createDocumentFragment();n.innerHTML=t,r.appendChild(n),[].slice.call(r.children[0].children).forEach(function(t){1===t.nodeType&&e.appendChild(t)})}Object.defineProperty(e,"__esModule",{value:!0});var g=n(191),C=r(g),R=n(185),S=r(R);e.timeFormat=a,e.hasClass=s,e.addClass=i,e.removeClass=o,e.unique=u,e.formatDate=c,e.getType=l,e.remove=d,e.getStyle=f,e.isFirefox=_,e.getNum=p,e.adjust_pi=m,e.getLen=v,e.cutstr=h,e.append=E;var y=n(17),b=r(y),j=/^\[object (\S+)\]$/,N=(Array.prototype.slice,Object.prototype.toString);String.prototype.trim=String.prototype.trim||function(){return this.replace(/(^\s*)|(\s*$)/g,"")}},90:function(t,e){},91:function(t,e){},92:function(t,e){},93:function(t,e){},94:function(t,e){},95:function(t,e){},124:function(t,e,n){var r,a;n(90),r=n(172);var s=n(130);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=r},125:function(t,e,n){var r,a;n(91),r=n(173);var s=n(131);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,a._scopeId="data-v-232d6446",t.exports=r},126:function(t,e,n){var r,a;n(94),r=n(174);var s=n(134);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,a._scopeId="data-v-69d88498",t.exports=r},127:function(t,e,n){var r,a;n(95),r=n(175);var s=n(135);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=r},128:function(t,e,n){var r,a;n(92),r=n(176);var s=n(132);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=r},129:function(t,e,n){var r,a;n(93),r=n(177);var s=n(133);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,a._scopeId="data-v-33b80116",t.exports=r},130:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lj_chat_wrapper"},[n("chat-list",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}]}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"lj_window clearfix"},[n("chat-l"),t._v(" "),n("chat-r")],1)],1)},staticRenderFns:[]}},131:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lj_chat_page fl"},[n("div",{staticClass:"lj_chat_mod"},[n("div",{staticClass:"lj_contacts_bd"},[n("ul",{ref:"list",staticClass:"lj_contacts_list"},t._l(t.list,function(e){return n("li",{staticClass:"lj_contacts_pe"},[n("div",{ref:"title",refInFor:!0,class:[t.classA,t.curPr==e.name?t.classC:"",t.curPr==e.name?t.classB:""],on:{mouseenter:t.aclass,mouseleave:t.dclass,click:t.changeR}},[n("span",{staticClass:"lj_name"},[t._v(t._s(e.name))]),t._v(" "),n("em",{ref:e.name,refInFor:!0,staticClass:"lj_contacts_count"},[t._v(t._s(e.readnum))]),t._v(" "),n("a",{staticClass:"lj_del none",attrs:{href:"javascript:;"},on:{click:function(e){e.stopPropagation(),t.del(e)}}},[t._v("X")])])])}))]),t._v(" "),t._m(0)]),t._v(" "),void 0],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lj_contacts_pub"},[n("a",{staticClass:"lj_sys_msg",attrs:{href:"javascript:void(0);"}},[t._v("系统消息")])])}]}},132:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lj_dialog_box fl"},[n("div",{staticClass:"lj_dialog_head clearfix"},[n("h3",{staticClass:"lj_dialog_title fl"},[t._v(t._s(t.name))]),n("span",{staticClass:"lj_dialog_status"},[t._v(t._s(t.status))]),t._v(" "),n("a",{staticClass:"lj_window_close",attrs:{href:"javascript:void(0)"},on:{click:function(e){e.stopPropagation(),t.switchover(e)}}},[t._v("×")])]),t._v(" "),n("div",{staticClass:"lj_dialog_body"},[n("div",{ref:"dialog_cont",staticClass:"lj_dialog_cont"},[t._l(t.readArr,function(e,r){return n("chat-msg",{attrs:{items:t.readArr,item:e,index:r}},[n("fieldset",{staticClass:"lj_dialog_prompt",attrs:{id:"lj_history"}},[n("legend",{staticClass:"lj_dialog_txt"},[t._v("以上是历史记录")])])])}),t._v(" "),t._l(t.unreadArr,function(e,r){return n("chat-msg",{attrs:{items:t.unreadArr,item:e,index:r}})})],2)]),t._v(" "),n("send-box"),t._v(" "),void 0],2)},staticRenderFns:[]}},133:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lj_dialog_send"},[n("div",{staticClass:"send_mod clearfix"},[n("div",{staticClass:"send_box fl"},[n("div",{staticClass:"send_area"},[n("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.message,expression:"message",modifiers:{trim:!0}}],staticClass:"send_input",attrs:{placeholder:"请按回车健发送私信，每次只能发送140个字符"},domProps:{value:t._s(t.message)},on:{input:[function(e){e.target.composing||(t.message=e.target.value.trim())},t.checklen],paste:t.checklen,cut:t.checklen,focus:t.cgbd,blur:[t.cgbd,function(e){t.$forceUpdate()}],keydown:function(e){t._k(e.keyCode,"enter",13)||(e.preventDefault(),e.stopPropagation(),t.sendmsg(e))}}})])])])])},staticRenderFns:[]}},134:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lj_chat_title clearfix",on:{click:t.switchover}},[n("i"),t._v(" "),n("em",[t._v("私信聊天("),n("span",{staticClass:"lj_chat_sum"},[t._v(t._s(t.total))]),t._v(")")])])},staticRenderFns:[]}},135:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.item.time?n("fieldset",{staticClass:"lj_dialog_prompt"},[n("legend",{staticClass:"lj_dialog_txt"},[t._v(t._s(t._f("format")(t.item.time)))])]):t._e(),t._v(" "),n("div",{staticClass:"lj_dialog_msg"},[n("div",{staticClass:"clearfix"},[n("span",{class:[t.classA,t.item.name==t.self?t.fr:t.fl]},[t._v(t._s(t.item.name))]),t._v(" "),n("div",{class:[t.classB,t.item.name==t.self?t.fr:t.fl]},[n("div",{staticClass:"bubble_cont"},[t._m(0),t._v(" "),n("div",{staticClass:"bubble_main clearfix"},[n("div",{staticClass:"bubble_msg fl"},[n("p",{staticClass:"bubble_page"},[t._v(t._s(t.item.text))])])])])])])]),t._v(" "),t.index===t.items.length-1?t._t("default"):t._e()],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bubble_arrow"},[n("i"),t._v(" "),n("em")])}]}},172:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(7),s=(r(a),n(125)),i=r(s),o=n(128),u=r(o),c=n(126),l=r(c);n(18);e.default={components:{chatList:l.default,chatL:i.default,chatR:u.default},computed:{show:function(){return this.$store.state.isWindow}}}},173:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(7),i=(a(s),n(32)),o=n(12),u=r(o),c=n(17),l=a(c),d=n(18);e.default={data:function(){return{classA:"lj_contacts_txt",classB:"active",classC:"current"}},computed:(0,i.mapState)({list:function(){return this.$store.getters.notCur},curPr:function(t){return t.curChat},unreadNum:function(t){return t.notRead}}),watch:{unreadNum:l.default.throttle(function(){for(var t in this.$store.state.unreadObj)this.$refs[t][0].textContent=this.$store.state.unreadObj[t]},300)},methods:{aclass:function(t){var e=(0,d.hasClass)(t.currentTarget,"current"),n=t.currentTarget.lastElementChild;!e&&(0,d.addClass)(t.currentTarget,"active"),(0,d.removeClass)(n,"none")},dclass:function(t){var e=(0,d.hasClass)(t.currentTarget,"current"),n=t.currentTarget.lastElementChild;!e&&(0,d.removeClass)(t.currentTarget,"active"),(0,d.addClass)(n,"none")},del:function(t){var e=this.$refs.list;e.removeChild(t.target.parentNode.parentNode),this.changeR({currentTarget:e.children[0].firstElementChild})},changeR:function(t){var e=t.currentTarget,n=e.querySelector(".lj_name").textContent,r=this.$refs.title;(0,d.hasClass)(e,"current")||((0,d.removeClass)(r,"active"),(0,d.removeClass)(r,"current"),this.$store.dispatch(u.CHNAGE_USER,n),this.$store.dispatch(u.NOT_READ,{type:"minus",num:e.children[1].textContent}),this.$store.dispatch(u.SET_ALLREAD),this.$store.dispatch(u.GET_MESSAGE),e.children[1].textContent=0)}}}},174:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(7),i=(a(s),n(12)),o=r(i),u=n(18);e.default={computed:{total:function(){return this.$store.state.notRead}},methods:{switchover:function(){this.$store.commit(o.CHANGE_PANEL,!0),this.$nextTick(function(){(0,u.adjust_pi)(document.querySelector(".lj_dialog_cont"))})}}}},175:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(7);r(a),n(32);e.default={props:["items","item","index"],data:function(){return{classA:"bubble_user",classB:"bubble_box",fr:"fr",fl:"fl",self:curid}}}},176:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(7),i=(a(s),n(32)),o=n(127),u=a(o),c=n(129),l=a(c),d=n(12),f=r(d),_=n(17),p=a(_),m=n(18);e.default={components:{chatMsg:u.default,sendBox:l.default},data:function(){return{readArr:[],unreadArr:[],tmpl:document.querySelector("#retmpl").innerHTML}},computed:(0,i.mapState)({name:function(t){return t.curChat},receiveData:function(t){return t.msgNum},renderHistory:function(t){return t.historyList},status:function(t){return t.curChat?t.statusObj[t.curChat]?"(在线)":"(离线)":""}}),watch:{receiveData:function(t,e){var n=this;this.$store.state.msgList.length&&!function(){var t=n.$refs.dialog_cont,e="",r=n.$store.state.msgList;for(p.default.templateSettings.interpolate=/{{([\s\S]+?)}}/g;r.length;)e+=p.default.template(n.tmpl)({oid:n.$store.state.curChat,msg:r.shift()});(0,m.append)(e,t),n.$nextTick(function(){(0,m.adjust_pi)(t)})}()},renderHistory:function(t,e){var n=this.$refs.dialog_cont;this.readArr=p.default.uniqBy(p.default.filter(this.$store.state.historyList,["isread",!0]).concat(p.default.filter(this.$store.state.historyList,["name",curid]))),this.unreadArr=p.default.filter(this.$store.state.historyList,["isread",!1]),this.$nextTick(function(){(0,m.adjust_pi)(n)})}},methods:{switchover:function(){this.$store.commit(f.CHANGE_PANEL,!1)}}}},177:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(7),i=(a(s),n(17)),o=a(i),u=n(12),c=r(u),l=n(18);e.default={data:function(){return{minHeight:22,maxHeight:null,tmpl:document.querySelector("#sendtmpl").innerHTML}},computed:{message:function(){return"boolean"==typeof this.$store.state.clearInput&&""}},methods:{cgbd:function(t){var e=t.target.parentNode;"focus"===t.type?e.style.borderColor="#fa7d3c":e.style.borderColor="#ccc"},checklen:function(t){var e=t.target,n=t.keyCode?t.keyCode:t.which,r=e.style,a=0,s=void 0;13!=n&&((0,l.cutstr)(e.value.trim(),140).length>=140&&(e.value=(0,l.cutstr)(e.value.trim(),140)),(0,l.isFirefox)()||(a=parseInt((0,l.getStyle)(e,"paddingTop"))+parseInt((0,l.getStyle)(e,"paddingBottom"))),e.style.height=this.minHeight+"px",e.scrollHeight>this.minHeight&&(this.maxHeight&&e.scrollHeight>this.maxHeight?(s=this.maxHeight-a,r.overflowY="scroll"):(s=e.scrollHeight-a,r.overflowY="hidden"),e.style.height=s+"px"))},sendmsg:function(t){var e=t.target,n=(t.keyCode?t.keyCode:t.which,e.value),r=(0,l.getLen)(n);if(!r||r>140)return!1;if(e.value="",this.$store.state.curChat){var a=this.$parent.$refs.dialog_cont;o.default.templateSettings.interpolate=/{{([\s\S]+?)}}/g;var s=o.default.template(this.tmpl)({oid:curid,msg:n});(0,l.append)(s,a),(0,l.adjust_pi)(a),this.$store.dispatch(c.SEND_MESSAGE,n)}}}}},178:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(7),s=r(a),i=n(18);s.default.filter("format",function(t){return(0,i.formatDate)(t)})},179:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s,i=n(87),o=a(i),u=n(186),c=a(u),l=n(17),d=a(l),f=n(12),_=r(f),p=(s={},(0,o.default)(s,_.INIT_CONNECT,function(t){var e=t.dispatch,n=t.commit;n(_.INIT_CONNECT),e(_.USER_ENTER,{chatid:chatid,curid:curid})}),(0,o.default)(s,_.USER_ENTER,function(t,e){var n=t.state,r=e.chatid,a=e.curid;n.socket.send((0,c.default)({type:"huid",content:r+"|"+a}))}),(0,o.default)(s,_.RECEIVE_MSG,function(t,e){var n=t.state,r=t.dispatch,a=t.commit;switch(e.type){case"ulist":e.leave?a(_.PERSON_LEAVE,e.leave):(r(_.USER_LIST,e),n.firstRender&&n.curChat&&(n.firstRender=!1,r(_.RENDER_HISTROY,e)));break;case"chat":e.ishit?r(_.RENDER_HISTROY,e):r(_.RECEIVE_MESSAGE,e)}}),(0,o.default)(s,_.USER_LIST,function(t,e){var n=t.commit;n(_.USER_LIST,e)}),(0,o.default)(s,_.CHNAGE_USER,function(t,e){var n=t.commit;n(_.CHNAGE_USER,e)}),(0,o.default)(s,_.NOT_READ,function(t,e){var n=(t.state,t.commit);n(_.NOT_READ,e)}),(0,o.default)(s,_.SET_ALLREAD,function(t){var e=t.state;t.commit;e.socket.send((0,c.default)({type:"smsg",action:"allread",curid:curid,content:chatid+"|"+e.curChat}))}),(0,o.default)(s,_.GET_MESSAGE,function(t){var e=t.state,n=t.commit;e.socket.send((0,c.default)({type:"smsg",curid:curid,content:chatid+"|"+e.curChat})),n(_.SET_ISREAD)}),(0,o.default)(s,_.SEND_MESSAGE,function(t,e){var n=t.state;t.commit;n.socket.send((0,c.default)({type:"smsg",curid:curid,content:chatid+"|"+n.curChat,message:e}))}),(0,o.default)(s,_.RECEIVE_MESSAGE,function(t,e){var n=t.commit;n(_.RECEIVE_MESSAGE,e)}),(0,o.default)(s,_.RENDER_HISTROY,function(t,e){var n=t.state,r=t.commit;if("ulist"===e.type)r(_.RENDER_HISTROY,d.default.filter(d.default.filter(e.message[chatid],["name",curid])[0].history,["name",n.curChat])[0].data);else{var a=[];if(e.msg)try{a=JSON.parse(e.msg).data}catch(t){console.error(t)}r(_.RENDER_HISTROY,a)}}),s);e.default=p},180:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(17),s=r(a),i={notCur:function(t){return s.default.uniqBy(t.userList.filter(function(t){return t.name!=curid}),"name")}};e.default=i},181:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t){return new i.default.Store({state:l.default,actions:f.default,mutations:p.default,getters:v.default,plugins:[(0,E.default)(t)]})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var s=n(32),i=r(s),o=n(7),u=r(o),c=n(184),l=r(c),d=n(179),f=r(d),_=n(182),p=r(_),m=n(180),v=r(m),h=n(183),E=r(h);u.default.use(i.default)},182:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s,i=n(87),o=a(i),u=n(17),c=a(u),l=n(12),d=r(l),f=(s={},(0,o.default)(s,d.INIT_CONNECT,function(t){t.isConnect=!0}),(0,o.default)(s,d.CHANGE_PANEL,function(t,e){t.isWindow=e}),(0,o.default)(s,d.USER_LIST,function(t,e){var n=(e.message,e.real);e.del;if(n.forEach(function(e){var n=0;c.default.find(e.history,function(t){t.name===curid&&(n=c.default.filter(t.data,["isread",!1]).length)}),e.name==curid||e.name in t.unreadObj||!n||(t.unreadObj[e.name]=n),t.userList.push({name:e.name,readnum:n}),t.statusObj[e.name]=!0}),!t.curChat&&t.userList.length){var r=t.userList.filter(function(t){return t.name!=curid});r.length&&(t.curChat=r[0].name)}}),(0,o.default)(s,d.CHNAGE_USER,function(t,e){t.curChat=e,t.clearInput=!0}),(0,o.default)(s,d.NOT_READ,function(t,e){var n=e.type,r=e.num;"minus"===n?t.notRead&&(t.notRead-=+r):t.notRead+=+r}),(0,o.default)(s,d.RECEIVE_MESSAGE,function(t,e){var n=e.oid,r=e.msg;n===t.curChat?(t.msgNum++,t.msgList.push(r)):(t.notRead++,n in t.unreadObj?t.unreadObj[n]++:t.unreadObj[n]=1)}),(0,o.default)(s,d.RENDER_HISTROY,function(t,e){t.historyList=e}),(0,o.default)(s,d.SET_ISREAD,function(t){delete t.unreadObj[t.curChat]}),(0,o.default)(s,d.PERSON_LEAVE,function(t,e){t.statusObj[e]=!1}),s);e.default=f},183:function(t,e,n){"use strict";function r(t){return function(e){t.onmessage=function(t){var n=void 0;try{n=JSON.parse(t.data)}catch(t){console.error(t)}e.dispatch(a.RECEIVE_MSG,n)},e.state.socket=t,e.subscribe(function(t){})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=n(12)},184:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={socket:null,isConnect:!1,isWindow:!1,firstRender:!0,curChat:"",userList:[],clearInput:!1,notRead:0,msgNum:0,msgList:[],historyList:[],unreadObj:{},statusObj:{}};e.default=n}});
//# sourceMappingURL=app.f0e112a92ab32ad2d8e9.js.map