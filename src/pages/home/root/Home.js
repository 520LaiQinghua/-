import React, { Component } from 'react';
import {connect} from 'react-redux' 

import {requestBannerData} from '../../../store/modules/home_banner'
import Header from '../../../components/app-header/index'
import Banner from './children/home_banner/banner'
import Nav from './children/home_nav/nav'
import AppScroll from '../../../components/app-scroll/AppScroll'
import GoodLesson from './children/home_goodLesson/goodLesson'
import SpecialSubject from './children/home_specialSubject/specialSubject'
import './children/children.css'
 class Home extends Component {
    render() {
        let {banner} = this.props;
        return (
            <div className="page" id="home">
                 <Header/>
              <AppScroll className="scrollContent">
             <Banner data={banner}/>
              <Nav/>
              <section id="content">
              <GoodLesson/>
              <SpecialSubject/>
              </section>
            </AppScroll>
            </div>
        );
    }
    componentDidMount(){
        //请求导航栏数据
        this.props.getBannerData();
    }
}
const mapStateToProps = (state, props)=>({
    //title: state.home.title,
    banner: state.banner.banner,
    //selectShop: state.home.selectShop
})

const mapDispatchToProps = (dispatch, props)=>({
    // 调用请求轮播图数据的函数
    getBannerData(){
        let action = requestBannerData();
        dispatch(action);
    }
})

 export default connect(mapStateToProps, mapDispatchToProps)(Home);