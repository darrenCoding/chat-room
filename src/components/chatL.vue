<template>
    <div class="lj_chat_page fl">
        <div class="lj_chat_mod">
            <div class="lj_contacts_bd">
                <ul ref="list" class="lj_contacts_list">
                    <li class="lj_contacts_pe" v-for="cl in list">
                        <div ref="title" v-bind:class="[classA,(curPr == cl.name) ? classC : '',(curPr == cl.name) ? classB : '']" @mouseenter="aclass" @mouseleave="dclass" @click="changeR">
                            <span class="lj_name">{{ cl.name }}</span>
                            <em class="lj_contacts_count" :ref="cl.name" >{{ cl.readnum }}</em>
                            <a class="lj_del none" href="javascript:;" @click.stop="del">X</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="lj_contacts_pub">
                <a class="lj_sys_msg" href="javascript:void(0);">系统消息</a>
            </div>
        </div>
        <template v-unread="unreadNum"></template>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { mapState } from 'vuex'
    import * as types from '../store/types';
    import _ from 'lodash';
    import { addClass, removeClass, hasClass, unique } from '../deps/util';

    export default {
        data () {
            return {
                classA : 'lj_contacts_txt',
                classB : 'active',
                classC : 'current'
            };
        },
        computed : mapState({
            list () {
                return this.$store.getters.notCur;
            },
            curPr ( state ) {
               return state.curChat;
            },
            unreadNum ( state ) {
                return state.notRead;
            }
        }),
        watch : {
            unreadNum : _.throttle(function () {
                for ( let arr in this.$store.state.unreadObj ) {
                    this.$refs[arr][0].textContent = this.$store.state.unreadObj[arr]
                }
            }, 300)
        },
        methods : {
            aclass (event) {
            let ishover = hasClass(event.currentTarget, 'current'),
                last = event.currentTarget.lastElementChild;
            !ishover && addClass(event.currentTarget, 'active');
            removeClass(last, 'none');
        },
        dclass (event) {
            let ishover = hasClass(event.currentTarget, 'current'),
                last = event.currentTarget.lastElementChild;
            !ishover && removeClass(event.currentTarget, 'active');
            addClass(last,"none");
        },
        del (event) {
            let list = this.$refs.list;
            list.removeChild(event.target.parentNode.parentNode);
            this.changeR({"currentTarget" : list.children[0].firstElementChild})
        },
        changeR (event) {
            let el   = event.currentTarget,
                name = el.querySelector(".lj_name").textContent,
                title  = this.$refs.title;
            if ( !hasClass(el, 'current' ) ){
                removeClass(title, "active");
                removeClass(title, "current");
                this.$store.dispatch(types['CHNAGE_USER'], name);
                this.$store.dispatch(types['NOT_READ'], {
                    type : "minus",
                    num : el.children[1].textContent,
                });
                this.$store.dispatch(types['SET_ALLREAD']);
                this.$store.dispatch(types['GET_MESSAGE']);
                el.children[1].textContent = 0;
            }
        }
      }
    }
</script>

<style scoped>
    .lj_chat_page{
      width: 159px;
      border-right: 1px #d9d9d9 solid;
    }

    .lj_chat_mod{
      position: static;
      width: 159px;
      padding: 0;
      -webkit-border-radius: 0;
      border-radius: 0;
      box-shadow: 0 0 0 rgba(0,0,0,0);
    }

    .lj_contacts_bd{
      position: relative;
      overflow-y : scroll;
      height: 356px;
    }

    .lj_contacts_pub{
      position:relative;
      height: 43px;
      border-top: 1px solid #d9d9d9;
      cursor : pointer;
    }

    .lj_contacts_pub a{
      display: block;
      height: 100%;
      line-height: 43px;
      color: #333;
      text-align: center;
    }

    .lj_contacts_pub .lj_contacts_count{
      top:14px;
    }

    .lj_contacts_pe{
      position: relative;
      cursor: pointer;
      color: #808080;
    }

    .lj_contacts_txt{
      text-align: center;
      padding: 4px 7px 4px 5px;
      height: 30px;
      line-height: 30px;
      overflow: hidden;
      font-size: 16px;
    }


    .lj_contacts_count{
      position: absolute;
      right: 10px;
      top:12px;
      min-width: 18px;
      height: 14px;
      line-height: 14px;
      text-align: center;
      padding: 0 2px;
      background: #fa7d3c;
      color: #fff;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      font-size: 12px;
    }

    .lj_del{
      position:absolute;
      left:10px;
      top:12px;
      height: 14px;
      line-height: 14px;
      text-align: center;
      color:#696e78;
      font-size:12px;
    }

    .none{
      display:none;
    }

    .active{
      background: #f2f2f5;
    }
</style>
