/**
 * 主页面理由组件
 */
import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
import {Route, Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import qzzInfo from '../info/qzzInfo'
import fbzInfo from '../info/fbzInfo'

class Main extends Component {
    render () {
        // 检查用户是否登录，如果没有，自动重定向到登录界面
        const {user} = this.props
        if(!user._id) {
            return  <Redirect to="/login" />
        }

        return (
            <div>
                <Switch>
                    <Route path="/qzzInfo" component={qzzInfo} />
                    <Route path="/fbzInfo" component={fbzInfo} />
                </Switch>
            </div>
        )
    }
}
export default connect(
    state => ({user: state.user})
)(Main) 
