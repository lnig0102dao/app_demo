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


export default class Register extends Component {
    state = {
        username: '',  // 用户名
        password: ''  // 密码
    }

    Login = () => {
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
        return (
            <div>
                <NavBar>招&nbsp;聘&nbsp;平&nbsp;台&nbsp;</NavBar>
                <Logo />
                <WingBlank>
                    <List>
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