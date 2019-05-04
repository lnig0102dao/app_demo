/**
 * 注册理由组件
 */
import React, {Component} from 'react'
import Logo from '../../components/logo/logo'  // 引入logo图标组件
import {
    NavBar,
    WingBlank,
    InputItem,
    List,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/action'
import {Redirect} from 'react-router-dom'


const ListItem = List.Item

class Register extends Component {
    state = {
        username: '',  // 用户名
        password: '',  // 密码
        password2: '', // 确认密码
        type: 'fbz' // 用户类型名称
    }

    register = () => {
        this.props.register(this.state)
        console.log(this.state)
    }

    // 处理输入数据的改变，更新对应的状态
    handerChange = (name, val) => {

        // 更新状态
        this.setState({
            [name]: val  // 属性名不是name，而是值
        })
    }

    toLogin = () => {
        this.props.history.replace('/login')
    }
    handleClick = () => {
        // this.inputRef.focus()
        // console.log(this.inputRef)
    }
    render () {
        const {type} = this.state
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
                        <InputItem onChange={val => {this.handerChange('username', val)}} placeholder='请输入用户名' onClick={this.handleClick()}>用户名:</InputItem>
                        <WhiteSpace />
                        <InputItem type={"password"} onChange={val => {this.handerChange('password', val)}} placeholder='请输入密码'>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace />
                        <InputItem type={"password"} onChange={val => {this.handerChange('password2', val)}} placeholder='请输入确认密码'>确认密码:</InputItem>
                        <WhiteSpace />
                        <ListItem>
                            <span>用户类型:</span>
                            &nbsp;&nbsp;&nbsp;
                            <Radio checked={type === 'qzz'} onChange={() => this.handerChange('type',  'qzz')}>求职者</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type === 'fbz'} onChange={() => this.handerChange('type',  'fbz')}>发布职位</Radio>
                        </ListItem>
                        <WhiteSpace />
                        <Button type={'primary'} onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace />
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {register}
)(Register)