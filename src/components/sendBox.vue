<template>
    <div class="lj_dialog_send">
        <div class="send_mod clearfix">
            <div class="send_box fl">
                <div class="send_area">
                    <textarea class="send_input" placeholder="请按回车健发送私信，每次只能发送140个字符" @input="checklen" @paste="checklen" @cut="checklen" @focus="cgbd" @blur="cgbd" @keydown.enter.prevent.stop="sendmsg" v-model.trim="message"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import _ from 'lodash';
    import * as types from '../store/types';
    import { getLen,cutstr,append,isFirefox,getStyle,adjust_pi} from '../deps/util';

    export default {
        data () {
            return {
                minHeight : 22,
                maxHeight : null,
                tmpl : document.querySelector("#sendtmpl").innerHTML
            }
        },
        computed : {
            message () {
                return typeof this.$store.state.clearInput === 'boolean' && '';
            }
        },
        methods : {
            cgbd (event) {
                let el = event.target.parentNode;
                if(event.type === 'focus'){
                    el.style.borderColor = "#fa7d3c";
                }else{
                    el.style.borderColor = "#ccc";
                }
            },
            checklen (event) {
                let el      = event.target,
                    key     = event.keyCode ? event.keyCode : event.which,
                    style   = el.style,
                    padding = 0,
                    scrollTop,
                    height;
                if ( key != 13 ) {
                    if ( cutstr(el.value.trim(),140).length >= 140 ) {
                        el.value = cutstr(el.value.trim(), 140);
                    }
                    if ( !isFirefox() ) {
                        padding = parseInt(getStyle(el,'paddingTop')) + parseInt(getStyle(el, 'paddingBottom'));
                    }
                    el.style.height = this.minHeight + "px";
                    if ( el.scrollHeight > this.minHeight ) {
                        if ( this.maxHeight && el.scrollHeight > this.maxHeight ){
                            height = this.maxHeight - padding;
                            style.overflowY = 'scroll';
                        } else {
                            height = el.scrollHeight - padding; 
                            style.overflowY = 'hidden';
                        }
                        el.style.height = height + 'px';
                    }
                }
            },
            sendmsg (event) {
                let el    = event.target,
                    key   = event.keyCode ? event.keyCode : event.which,
                    value = el.value,
                    len   = getLen(value);
                if ( !len || len > 140 ) {
                    return false;
                }
                el.value = "";

                if ( this.$store.state.curChat ) {
                    let tcont = this.$parent.$refs.dialog_cont;
                    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
                    let msgstr = _.template(this.tmpl)({
                        oid : curid,
                        msg : value
                    });
                    append(msgstr, tcont);
                    adjust_pi(tcont);
                    this.$store.dispatch(types['SEND_MESSAGE'], value);
                }
            }
        }
    }
</script>

<style scoped>
    .lj_dialog_send{
        position: absolute;
        bottom: 0;
        width: 400px;
        background-color: #fff;
        z-index: 99;
        border: none;
    }

    .send_mod{
        position: relative;
        padding: 7px 0 7px 5px;
        border-color: #d9d9d9;
        border-top-width: 1px;
        border-top-style: solid;
    }

    .send_box{
        width: 95%;
    }

    .send_area{
        padding-right: 20px;
        background: #fff;
        border: 1px #ccc solid;
    }

    .send_input{
        width: 100%;
        overflow: hidden;
        height: 22px;
        line-height: 18px;
        padding: 5px 10px 0;
        box-shadow: 0px -1px 3px 0px rgba(0,0,0,0.10) inset;
        border: none;
        background: #fff;
        vertical-align: middle;
        outline-style: none;
        resize:none;
        color: #808080;
    }
</style>