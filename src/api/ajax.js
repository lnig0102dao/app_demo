/*
能发送ajax请求的函数模块
函数的返回值是promise对象
 */

import axios from 'axios'
const baseUrl = ''
export default function ajax(url = '', data = {}, type = 'GET') {
    url = baseUrl + url
    if (type === 'GET') {
        // 准备 url query 参数数据
        let dataStr = '' // 数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&'
        })
        if (dataStr !== '') {
            dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
            url = url + '?' + dataStr
        }
        // 发送 get 请求
        return axios.get(url)
    } else {
        // 发送 post 请求
        return axios.post(url, data) // data: 包含请求体数据的对象
    }
}