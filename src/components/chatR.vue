<template>
    <div class="lj_dialog_box fl">
        <div class="lj_dialog_head clearfix">
            <h3 class="lj_dialog_title fl">{{ name }}</h3><span class="lj_dialog_status">{{ status }}</span>
            <a href="javascript:void(0)" class="lj_window_close" @click.stop="switchover">&times;</a>
        </div>
        <div class="lj_dialog_body">
            <div ref="dialog_cont" class="lj_dialog_cont">
                <chat-msg v-for="(item, index) in readArr" :items="readArr" :item="item" :index="index">
                    <fieldset id="lj_history" class="lj_dialog_prompt">
                            <legend class="lj_dialog_txt">以上是历史记录</legend>
                        </fieldset>
                </chat-msg>
                <chat-msg v-for="(item, index) in unreadArr" :items="unreadArr" :item="item" :index="index"></chat-msg>
            </div>
        </div>
        <send-box></send-box>
        <template v-msgnum="receiveData" v-history="renderHistory"></template>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { mapState } from 'vuex'
    import chatMsg from './chatMsg.vue';
    import sendBox from './sendBox.vue';
    import * as types from '../store/types';
    import _ from 'lodash';
    import { append, getType, remove, adjust_pi } from '../deps/util';

    export default {
        components : {
            chatMsg,
            sendBox
        },
        data () {
            return {
                readArr : [],
                unreadArr : [],
                tmpl : document.querySelector("#retmpl").innerHTML
            };
        },
        computed : mapState({
            name ( state ) {
                return state.curChat
            },
            receiveData ( state ) {
                return state.msgNum;
            },
            renderHistory ( state ) {
                return state.historyList;
            },
            status ( state ) {
                return state.curChat ? (state.statusObj[state.curChat] ? '(在线)' : '(离线)') : '' ;
            }
        }),
        watch : {
            receiveData ( val, oldval ) {
                if ( this.$store.state.msgList.length ) {
                    let tcont = this.$refs.dialog_cont;
                    let msgstr = '',
                        _msgList = this.$store.state.msgList;
                    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
                    while ( _msgList.length ) {
                        msgstr += _.template(this.tmpl)({
                            oid : this.$store.state.curChat,
                            msg : _msgList.shift()
                        });
                    }
                    append(msgstr, tcont);
                    this.$nextTick(() => {
                        adjust_pi(tcont);
                    })
                }
            },
            renderHistory ( val, oldval ) {
                let tcont = this.$refs.dialog_cont,
                    unreadStr = '';
                this.readArr = _.uniqBy(_.filter(this.$store.state.historyList, ['isread', true]).concat(_.filter(this.$store.state.historyList, ['name', curid])));
                this.unreadArr = _.filter(this.$store.state.historyList,['isread', false]);
                this.$nextTick(() => {
                    adjust_pi(tcont);
                })
            }
        },
        methods : {
            switchover () {
                this.$store.commit(types['CHANGE_PANEL'], false);
            }
        }
    }
</script>
<style>
    .lj_dialog_box{
        width: 400px;
        height: 400px;
        background: #f2f2f5;
        overflow: hidden;
    }

    .lj_dialog_head{
        position:relative;
        height: 38px;
        padding: 0 10px;
        line-height: 38px;
        border-bottom: 1px #d9d9d9 solid;
        background: #fff;
    }

    .lj_dialog_title{
        max-width: 225px;
        line-height: 38px;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        font-size: 16px;
        font-weight: bold;
        overflow: hidden;
    }

    .lj_dialog_status{
        color: #333;
        font-size: 16px;
        font-weight: bold;
    }

    .lj_dialog_body{
        position: relative;
        height: 362px;
    }

    .lj_dialog_cont{
        position: relative;
        top: 0px;
        overflow-y:auto;
        display: block;
        visibility: visible;
        height: 319px;
    }

    .lj_dialog_more{
        padding-top: 10px;
        text-align: center;
    }

    .lj_link1{
        color: #eb7350;
        font-size: 12px;
    }

    .lj_window_close{
        position:absolute;
        right:6%;
        color:#696e78;
        font-size:25px;
        cursor : pointer;
    }
</style>