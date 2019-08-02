import React, { Component } from 'react';
import {connect} from 'react-redux' 
import {requestBannerData} from '../../../store/modules/home_banner'
import {requestGoodLessonData} from '../../../store/modules/home_goodLesson'
import {requestCareerData} from '../../../store/modules/home_career'
import{requestInterestData} from '../../../store/modules/home_interest'

import Header from '../../../components/app-header/index'
import Banner from './children/home_banner/banner'
import Nav from './children/home_nav/nav'
import AppScroll from '../../../components/app-scroll/AppScroll'
import GoodLesson from './children/home_goodLesson/goodLesson'
import SpecialSubject from './children/home_specialSubject/specialSubject'
import Career from './children/home_career/career'
import Interest from './children/home_interest/interest'

import './children/children.css'

 class Home extends Component {
    render() {
        let {banner,goodLesson,career,interest} = this.props;
        let Button = <li><button type="button" onClick={this.handleSearch} >搜索</button></li>
        return (
            <div>
            <Header Button={Button}/>
              <AppScroll className="scrollContent">
             <Banner data={banner}  props={this.props}/>
              <Nav/>
              <section id="content">
              <GoodLesson data={goodLesson} props={this.props}/>
              <SpecialSubject/>
             <Career data={career} props={this.props}/>
             <Interest data={interest} props={this.props}/>
              </section>
            </AppScroll>
            </div>
        );
    }
    componentDidMount(){
        //请求轮播图的数据
        this.props.getBannerData();
        //请求"畅销好课"的数据
        this.props.getGoodLessonData();
        //请求“职场提升”的数据
        this.props.getCareerData();
        //请求“兴趣生活”的数据
        this.props.getInterestData();
    }
    handleSearch=()=>{
        this.props.history.push('/home/search');
    }
}
const mapStateToProps = (state, props)=>({
    //第一个banner是指当前页的banner,第二个banner是指store下的index中reduce下的banner，第三个banner是指modules下home_bnaner下banner:[]下的数据;
    banner: state.banner.banner,
    goodLesson:state.goodLesson.goodLesson,
    career:state.career.career,
    interest:state.interest.interest,
    
})

const mapDispatchToProps = (dispatch, props)=>({
    // 调用请求轮播图数据的函数
    getBannerData(){
        let action = requestBannerData();
        dispatch(action);
    },
    //调用请求畅销好课的hanshu 
    getGoodLessonData(){
        let action = requestGoodLessonData();
        dispatch(action);
    },
      // 调用"职业提升"的函数
    getCareerData(){
    let action = requestCareerData();
    dispatch(action);
    },
    // 调用"兴趣生活"的函数
    getInterestData(){
        let action =requestInterestData();
        dispatch(action);
        }
})

 export default connect(mapStateToProps, mapDispatchToProps)(Home);