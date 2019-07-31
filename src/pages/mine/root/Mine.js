import React from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import './style.css'

const Mine=()=>{

        let data=[
            {id:1111, name:'我的订单', path:'/mine/order', icon:'icon-dingdandaifukuan'},
            {id:1112, name:'我的优惠券', path:'/mine/discount', icon:'icon-coupon'},
            {id:1113, name:'我的购物车', path:'/mine/cart', icon:'icon-gouwuche'}, 
            {id:1114, name:'我的学习卡', path:'/mine/card', icon:'icon-icon-test'},
            {id:1115, name:'分享赚学费', path:'/mine/enjoy', icon:'icon-labagonggaoxiaoxi'}

        ]
        return (
            <div className="page" id="mine">
                <div className="person">
                <span><img src="http://edu-image.nosdn.127.net/7c5a8d29-ce20-4f97-a3a6-49872772667d.png?imageView&quality=100&thumbnail=100y100" alt=""/></span>
                <a href="javacsript':">登录/注册</a>
                </div>
                <ul className="list">
            {
                data.map(item=>(
                    <NavLink className="item border-bottom" key={item.id} 
                        to={item.path}>
                        <span className={'iconfont '+ item.icon}></span>
                        <span>{item.name}</span>
                        <span className="iconfont icon-changyongicon-"></span>
                    </NavLink>
                ))
            }
            </ul>

            </div>
        );
    
}

export default connect()(Mine);