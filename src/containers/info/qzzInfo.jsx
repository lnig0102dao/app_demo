/**
 * 求职者信息完善的路由容器组件
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

import HeaderSelector from '../../components/headerSelector/header-selector'
import {updataUser} from '../../redux/action'

class qzzInfo extends Component {

    state = {
        header: '',
        post: '',
        info: '',
    }

    // 更新header状态 
    setHeader = (header) => {
        this.setState({
            header
        })
    }

    handleChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }

    save = () => {
        this.props.updataUser(this.state)
        console.log(this.state)
    }

    render () {
        const {header, type} =  this.props.user
        if(header) {
            const path = type === 'qzz'? 'qzz' : 'fbz'
            return <Redirect to={path} />
        }

        return (
            <div>
                <NavBar>求职者信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <InputItem placeholder="请输入求职岗位"
                           onChange={val => {this.handleChange('post', val)}}>求职岗位：</InputItem>
                <TextareaItem title="个人介绍：" 
                              rows={3}
                              onChange={val => {this.handleChange('info', val)}}/>
                <Button type="primary"
                        onClick={this.save}>保&nbsp;&nbsp;&nbsp;存</Button>
            </div>
        )
    }
}

export default connect (
    state => ({user: state.user}),
    {updataUser}
)(qzzInfo)