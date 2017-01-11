<template>
  <div class="lj_chat_wrapper">
    <chat-list v-show="!show"></chat-list>
    <div v-show="show" class="lj_window clearfix">
      <chat-l></chat-l>
      <chat-r></chat-r>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import chatL from './components/chatL.vue';
import chatR from './components/chatR.vue';
import chatList from './components/chatList.vue';
import {adjust_pi} from './deps/util';

export default {
  components: {
    chatList,
    chatL,
    chatR
  },
  computed : {
    show () {
      return this.$store.state.isWindow
    }
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .fl{
    float: left;
  }

  .fr{
    float: right;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .clearfix {
    display: inline-block;
  }

  .clearfix {
    display: block;
  }

  .lj_chat_wrapper {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index : 100000;
    cursor: pointer;
    font: 14px/1.3 'Arial',sans-serif;
  }

  .lj_chat_wrapper a{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-decoration: none;
  }

  .lj_chat_wrapper textarea{
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  .lj_chat_wrapper h1,h2,h3,h4,h5{
    font-weight: normal;
  }

  .lj_chat_wrapper ul{
    list-style : none;
  }

  .lj_window{
    width: 560px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    background: #fff;
    box-shadow: -3px -2px 8px -1px rgba(0,0,0,0.2);
    -webkit-border-radius: 2px 0px 0px 2px;
    border-radius: 2px 0px 0px 2px;
    color: #333; 
  }
</style>
