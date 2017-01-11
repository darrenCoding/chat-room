
'use strict';

import _ from 'lodash';

const objectRegExp = /^\[object (\S+)\]$/,
    slice = Array.prototype.slice,
    toString = Object.prototype.toString;

export function timeFormat(date){
    let s = '';
    s += [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-') + ' ';
    s += [date.getHours(), date.getMinutes(), date.getSeconds()].join(':')
    return s;
}

export function hasClass(obj, cls) {
    if (obj.classList) {
        return obj.classList.contains(cls);
    }else {
        return new RegExp('(\\s|^)'+cls+'(\\s|$)').test(obj.className)
    }
}

export function addClass(obj, cls) {
    if (!hasClass(obj, cls)) {
        obj.className += ' ' + cls;
    }
}

export function removeClass(obj, cls) {
    let rarr = Array.from(obj);
    if(rarr.length){
        rarr.forEach((item) => {
            removeClass(item, cls)
        })
    }else{
        if (hasClass(obj, cls)) {
          obj.className = obj.className.replace(RegExp('(\\s|^)' + cls + '(\\s|$)'), '');
        }
    }
}

export function unique(arrL,arrR,attr){
    return _.unionBy(arrL, arrR, attr);
}

export function formatDate(time){
    if(time){
        let dt = new Date(time);
        return ((dt.getMonth() + 1) + '月' + dt.getDate() + '日' + dt.getHours() + ':' + dt.getMinutes()).replace(/([\-\: ])(\d{1})(?!\d)/g,'$10$2');
    }
}

export function getType(obj) {
  let type = typeof obj;
  if (type !== 'object') {
    return type;
  }
  return toString.call(obj)
    .replace(objectRegExp, '$1').toLowerCase();
}

export function remove(parent,childs){
    childs = Array.from(childs);
    for(let i = childs.length - 1; i >= 0; i--) { 
        parent.removeChild(childs[i]); 
    }
}

export function getStyle(elem,name){
    if(elem.currentStyle){
        let val = elem.currentStyle[name];
        if (name === 'height' && val.search(/px/i) !== 1) {
            let rect = elem.getBoundingClientRect();
            return rect.bottom - rect.top -
                    parseFloat(getStyle('paddingTop')) -
                    parseFloat(getStyle('paddingBottom')) + 'px';    
        };
        return val;
    }else{
        return getComputedStyle(elem, null)[name];
    }
}

export function isFirefox(){
    let isFirefox;
    return isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window
}

export function getNum(num){
    return ((typeof num === 'number') && isFinite(num)) ? num : 0;
}

export function adjust_pi(el){
    el.scrollTop = el.scrollHeight - el.clientHeight;
}

String.prototype.trim = String.prototype.trim || function(){
　return this.replace(/(^\s*)|(\s*$)/g, "");
}

export function getLen(str){
    let realLength = 0, 
        len = str.length, 
        charCode = -1;
    for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128){
            realLength += 1;
        }else{
            realLength += 2;
        }
    }
    return realLength;
}

export function cutstr(str,len){
    let str_length = 0,
        str_len = str.length,
        str_cut = new String();
    for (let i = 0; i < str_len; i++) {
        let a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) { 
            str_length++;
        }
        str_cut = str_cut.concat(a);
        if (str_length >= len) {
            return str_cut;
        }
    }  
    if (str_length < len) {
        return str;
    }
}

export function append(str,el){
    let temDiv = document.createElement("div"),
        fragment = document.createDocumentFragment();
    temDiv.innerHTML = str;
    fragment.appendChild(temDiv);
    [].slice.call(fragment.children[0].children).forEach((item) => {
        item.nodeType === 1 && el.appendChild(item);
    })
}