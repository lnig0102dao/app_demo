/**
 * 登陆理由组件
 */
import React, {Component} from 'react'
import Logo from '../../components/logo/logo'  // 引入logo图标组件
import {
    NavBar,
    WingBlank,
    InputItem,
    List,
    WhiteSpace,
    Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {login} from '../../redux/action'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    state = {
        username: '',  // 用户名
        password: ''  // 密码
    }

    Login = () => {
        this.props.login(this.state)
        console.log(this.state)
    }

    // 处理输入数据的改变，更新对应的状态
    handerChange = (name, val) => {

        // 更新状态
        this.setState({
            [name]: val  // 属性名不是name，而是值
        })
    }

    toRegister = () => {
        this.props.history.replace('/register')
    }

    render () {
        const {msg, redirectTo} = this.props.user
        // 如果redirectTo有值，需要重定向到指定路由
        if (redirectTo) {
            return <Redirect to={redirectTo} />
        }
        
        return (
            <div>
                <NavBar>招&nbsp;聘&nbsp;平&nbsp;台&nbsp;</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                    {msg? <div className="error-msg">{msg}</div> : null}
                    <WhiteSpace />
                        <InputItem onChange={val => {this.handerChange('username', val)}} placeholder='请输入用户名'>用户名:</InputItem>
                        <WhiteSpace />
                        <InputItem type={"password"} onChange={val => {this.handerChange('password', val)}} placeholder='请输入密码'>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace />
                        <Button type={'primary'} onClick={this.Login}>登&nbsp;&nbsp;&nbsp;陆</Button>
                        <WhiteSpace />
                        <Button onClick={this.toRegister}>注册账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {login}
)(Login)