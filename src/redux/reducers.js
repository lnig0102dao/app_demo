/**
 * 包含n个reducer函数：根据老的state和指定的action 返回要给新的state
 */
import {combineReducers} from 'redux'
function xxx (state=0, action) {

    return state
}

function yyy (state=0, action) {

    return state
}


export default combineReducers({
    xxx,
    yyy
})
//向外暴露的状态结构：{xxx:0, yyy: 0}