import { combineReducers } from 'redux'
import * as ActionTypes from './actionTypes'
/**
 * reducer就是一个纯函数, 接收旧的state和action, 返回新的state
  */

// 需要存储的初始状态数据

const initialState = {
    showStatus: false,  // 显示状态
    song: {},   //当前歌曲
    songs: []   //歌曲列表
}

// 拆分Reducer
// 显示或隐藏播放状态