/**
 * 选择用户头像的UI组件
 */

import React, {Component} from 'react'
import {List, Grid} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class headerSelector extends Component {

    constructor(props) {
        super(props)
        this.HeaderList = []
        for (let i =0; i<20; i++) {
            this.HeaderList.push({
                text: `头像${i+1}`,
                icon: require(`../../assets/images/头像${i+1}.png`)
            })
        }
    }

    state = {
        icon: null // 图片对象,默认没有值
    }

    static propTypes = {
        setHeader: PropTypes.func.isRequired
    }

    handleClick = ({text, icon}) => {
        this.setState({icon})
        this.props.setHeader(text)
    }

    render () {
        // 头部界面
        const {icon} = this.state
        const listHeader = icon ? (
            <div>
                已选择头像：<img src={icon} alt="头像"/>
            </div>
        ) : '请选择头像'

        return (
            <List renderHeader={() => listHeader }>
                <Grid data={this.HeaderList} 
                      columnNum={5} 
                      onClick={this.handleClick} />
            </List>
        )
    }
}

