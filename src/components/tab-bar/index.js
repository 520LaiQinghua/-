import React, { Component } from 'react'
import './style.scss'

export default class TabBar extends Component {
    state = {};
    
    render() {
        const tabs = [
            {id: 1, title: '首页', basicPath: '/home', path: '/home', icon: 'icon-shouye', selectIcon: 'icon-shouye1'},
            {id: 2, title: '我的学习', basicPath: '/learn', path: '/learn', icon: 'icon-shu', selectIcon: 'icon-shu2'},
            {id: 3, title: '账号', basicPath: '/mine', path: '/mine', icon: 'icon-wode', selectIcon: 'icon-wode1'}
        ]

        //  根据地址栏当前的地址判断那个tabItem选中了
        let selectIndex = tabs.findIndex(item=>this.state.currentPath.startsWith(item.basicPath));

        return (
            <nav className="tab-bar border-top">
            {
                tabs.map((item, index)=>(
                    <li key={item.id}
                        className="tab-item"
                        onClick={()=>this.changeTab(index, item.path)}>
                        <span className={'iconfont '+ ((selectIndex === index)?item.selectIcon:item.icon)}></span>
                        <span>{item.title}</span>
                    </li>
                ))
            }
            </nav>
        )
    }

    changeTab = (index, path)=>{
        // 切换页面
        this.props.history.push(path);
    }


    static getDerivedStateFromProps(props, state){
        return {
            // 取出当前地址栏的地址
            currentPath: props.location.pathname
        }
    }



}
