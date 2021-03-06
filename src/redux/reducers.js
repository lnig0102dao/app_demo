/**
 * 包含n个reducer函数：根据老的state和指定的action 返回要给新的state
 */
import {combineReducers} from 'redux'
import {getRedirectTo} from '../utils/index'
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER
} from './action-type'


const initUser = {
    username: '', // 用户名
    type: '', // 用户类型  qzz/fbz
    msg: '', // 错误提示信息
    redirectTo: '' // 需要自动重定向的路由路径
}
// 产生user状态的reducer
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS: // data是user
          const {type, header} = action.data
          return {...action.data, redirectTo: getRedirectTo(type, header)}
        case ERROR_MSG: // data是msg
          return {...state, msg: action.data}
        case RECEIVE_USER: // data是user
          return action.data
        case RESET_USER: // data是msg
          return {...initUser, msg: action.data}
        default:
          return state
    }
}


export default combineReducers({
    user
})
//向外暴露的状态结构：{user: {}}