/**
 * 
 */
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER
} from './action-type'

import {
    reqRegister,
    reqLogin,
    reqUpdateUser
}  from '../api/index'

// 授权成功的同步
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})

// 错误提示信息
const errorMsg = (msg) => ({type: ERROR_MSG,  data: msg})

// 接收用户的同步action
const receiveUser = (user) => ({type: RECEIVE_USER, data: user})

// 重置用户的同步action
const resetUser = (msg) => ({type: RESET_USER, data: msg})

// 注册异步action
export const register = (user) => {
    const {username, password, password2, type} = user
    if (!username) {
        return errorMsg('请输入用户名')
    } else if (password !== password2) {
        return errorMsg('2次密码要一致')
    } else if (!password || !password2) {
        return errorMsg('请输入密码')
    }

    return async dispatch => {
        // 发送注册的异步请求
        const reponse = await reqRegister({username, password, type})
        const result = reponse.data
        if(result.code === 0) {
            // 分发成功的action
            dispatch(authSuccess(result.data))
        } else {
            // 分发失败的action
            dispatch(errorMsg(result.msg))
        }
    }
}

// 登录异步action
export const login = (user) => {

    const {username, password} = user
    if (!username) {
        return errorMsg('请输入用户名')
    } else if (!password) {
        return errorMsg('请输入密码')
    }

    return async dispatch => {
        const reponse = await reqLogin({username, password})
        const result = reponse.data
        if(result.code === 0) {
            // 分发成功的action
            dispatch(authSuccess(result.data))
        } else {
            // 分发失败的action
            dispatch(errorMsg(result.msg))
        }
    }
}

// 更新用户信息
export const updataUser = (user) =>{
    // console.log(user)
    return async dispatch => {
        const response = await reqUpdateUser(user)
        const result = response.data
        if(result.code===0) { // 更新成功: data
          dispatch(receiveUser(result.data))
        } else { // 更新失败: msg
          dispatch(resetUser(result.msg))
        }
      }
}