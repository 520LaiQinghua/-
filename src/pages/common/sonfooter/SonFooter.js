import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './sonfooter.css'
class SonFooter extends Component {
    render() {
        return (
           
            <footer id="foot">
              
                <NavLink  to='/payment'  className="addCart">
             
                    <span className="iconfont icon-gouwuche"></span>
                    <span>加入购物车</span>
                  
                    </NavLink>
               
            <section className="buy">
            <NavLink  to='/payment'>加入学习</NavLink>
            </section>
            </footer>
            
        );
    }
}

export default SonFooter;