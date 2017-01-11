<template>
    <div>
        <fieldset v-if="item.time" class="lj_dialog_prompt">
            <legend class="lj_dialog_txt">{{ item.time | format}}</legend>
        </fieldset>
        <div class="lj_dialog_msg">
            <div class="clearfix">
                <span v-bind:class="[classA,item.name == self ? fr : fl]">{{ item.name }}</span>
                <div v-bind:class="[classB,item.name == self ? fr : fl]">
                    <div class="bubble_cont">
                        <div class="bubble_arrow">
                            <i></i>
                            <em></em>
                        </div>
                        <div class="bubble_main clearfix">
                            <div class="bubble_msg fl">
                                <p class="bubble_page">{{ item.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <slot v-if="index === items.length - 1"></slot>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { mapState } from 'vuex';

    export default {
        props : ['items','item','index'],
        data () {
            return {
                classA : 'bubble_user',
                classB : 'bubble_box',
                fr : 'fr',
                fl : 'fl',
                self : curid,
            }
        }
    }
</script>

<style>
    .lj_dialog_prompt{
        display: block;
        margin: 22px 55px 14px;
        padding: 0 0 0 20px;
        position: relative;
        border-style: dashed;
        border-width: 1px 0 0 0;
        border-color: #d9d9d9;
    }

    .lj_dialog_txt{
        position: absolute;
        top: -9px;
        left: 50%;
        width: 108px;
        margin-left: -54px;
        text-align: center;
        font-weight: normal;
        color: #808080;
        background: #f2f2f5;
        padding: 0 5px;
        font-size: 12px;
    }

    .lj_dialog_msg{
        padding: 10px 10px 0;
    }

    .bubble_box{
        max-width: 253px;
    }

    .bubble_cont{
        position: relative;
        max-width: 220px;
        padding: 5px 9px;
        margin-top: 0;
        margin-left: 13px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        box-shadow: 0 3px 3px rgba(0,0,0,.05);
    }

    .bubble_box.fl .bubble_cont{
        background: #fff;
        border: 1px #ccc solid;
        margin-left: 13px;
    }

    .bubble_box.fr .bubble_cont{
        background: #d7ebfe;
        border: 1px #b7d4ef solid;
        margin-right: 13px;
    }

    .bubble_arrow{
        position: absolute;
        top: 5px;
    }

    .bubble_box.fl .bubble_arrow{
        left: -11px;
    }

    .bubble_box.fr .bubble_arrow{
        right: -14px;
    }

    .bubble_arrow i{
        border-width: 3px;
    }

    .bubble_box.fl .bubble_arrow i{
        border-top-color: #ccc;
        color: #ccc;
        margin-left: 4px;
    }

    .bubble_box.fr .bubble_arrow i{
        border-top-color: #b7d4ef;
        color: #b7d4ef;
        margin-right: 4px;
    }

    .bubble_arrow em{
        border-width: 4px;
    }

    .bubble_box.fl .bubble_arrow em{
        border-top-color: #fff;
        margin: 1px 0 0 -8px;
        color: #fff;
    }

    .bubble_box.fr .bubble_arrow em{
        border-top-color: #d7ebfe;
        margin: 1px 0 0 -18px;
        color: #d7ebfe;
    }

    .bubble_arrow i,.bubble_arrow em{
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        overflow: hidden;
        font-size: 0;
        line-height: 0;
        vertical-align: top;
        border-bottom-color: transparent;
       
    }

    .bubble_box.fl .bubble_arrow i,.bubble_box.fl .bubble_arrow em{
        border-left-color: transparent;
    }

    .bubble_box.fr .bubble_arrow i,.bubble_box.fr .bubble_arrow em{
        border-right-color: transparent;
    }

    .bubble_main{
        max-width: 220px;
    }

    .bubble_msg{
        float: left;
        max-width: 220px;
        margin-right: 0;
    }

    .bubble_page{
        line-height: 20px;
        color: #333;
        word-wrap: break-word;
    }
</style>