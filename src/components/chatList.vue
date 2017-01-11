<template>
    <div class="lj_chat_title clearfix" @click="switchover">
        <i></i>
        <em>私信聊天(<span class="lj_chat_sum">{{ total }}</span>)</em>
    </div>
</template>
<script>
    import Vue from 'vue';
    import * as types from '../store/types';
    import { getNum, adjust_pi } from '../deps/util';

    export default {
        computed : {
            total () {
                return this.$store.state.notRead;
            }
        },

        methods : {
            switchover () {
                this.$store.commit(types['CHANGE_PANEL'], true);
                this.$nextTick(() => {
                    adjust_pi(document.querySelector(".lj_dialog_cont"));
                })
            }
        }
    }
</script>
<style scoped>
    .lj_chat_title{
        position: absolute;
        right: 0;
        bottom: 0px;
        width: 270px;
        height: 40px;
        box-shadow: -3px -2px 8px -1px rgba(0,0,0,0.2);
        cursor: pointer;
        background-color:#f0f1f4;
        border-radius:2px 0 0 2px;
        -webkit-border-radius:2px 0 0 2px;
        -moz-border-radius:2px 0 0 2px;
        line-height:40px;
        font-size: 14px;
        color: #333;
    }
    .lj_chat_title i{
        float:left;
        width: 18px;
        height: 16px;
        margin: 11px 15px 0 20px;
        background: url(../assets/socket_icon.png) 0 -20px no-repeat;
    }
    .lj_chat_title em{
        float:left;
    }
    .lj_chat_sum{
        padding: 0 3px;
        vertical-align: bottom;
    }
</style>