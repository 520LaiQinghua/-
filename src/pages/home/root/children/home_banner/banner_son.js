import React, { Component } from 'react';
import AppScroll from '../../../../../components/app-scroll/AppScroll';
import './banner.css'
import {NavLink} from 'react-router-dom'
import Header  from '../../../../../components/app-header/index'
class banner_son extends Component {
    render() {
        let Return =<span className="iconfont icon-changyongicon-1" onClick={this.handleReturn}></span>
        return (
           <div>
                <Header props={this.props} Return={Return}/>
                <AppScroll className="scrollContent">
                  
            <div className="bannerDetail">
               <section className="bannerDetail1"><img src="https://edu-image.nosdn.127.net/8064643ce68748e5a45c90aff1b4bb63.jpg?imageView&crop=0_0_1242_573&quality=100&thumbnail=750y346&type=webp" alt=""/></section>
               <section className="bannerDetail2">
                   <h2>《Python从入门到基础》</h2>
                   <h4>￥<strong>999.00</strong><span>原价￥8889.00</span></h4>
                   </section>
               <section className="bannerDetail3">
                   <img src="https://edu-image.nosdn.127.net/4a89be45d8c8461ca215f2a3c0c4e1d2.jpg?imageView&quality=100" alt=""/>
                   <img src="https://edu-image.nosdn.127.net/bcd4e42179c341c7be135a5cf8963d13.jpg?imageView&quality=100" alt=""/>
                   <img src="" alt=""/>
               </section>
              
            </div>
            </AppScroll>
            <footer id="foot">
             <NavLink className="buy" to='/payment'>立即购买</NavLink>
            </footer>
           </div>
        );
    }
    handleReturn=()=>{
        this.props.history.goBack();
        }
}

export default banner_son;