
'use strict';

const state = {
    /* socket实例 */
    socket : null,
    /* 是否连接 */
    isConnect : false,
    /* 是否为聊天面板 */
    isWindow : false,
    /* 是否为第一次渲染 */
    firstRender : true,
    /* 当前聊天对象 */
    curChat : '',
    /* 当前聊天对象 */
    userList : [],
    /* 是否清空发送框 */
    clearInput : false,
    /* 总未读数量 */
    notRead : 0,
    /* 消息数量 */
    msgNum : 0,
    /* 消息内容 */
    msgList : [],
    /* 历史消息 */
    historyList : [],
    /* 聊天对象对应未读数量 */
    unreadObj : {},
    /* 聊天对象对应的状态(在线和离线) */
    statusObj : {}
}

export default state;