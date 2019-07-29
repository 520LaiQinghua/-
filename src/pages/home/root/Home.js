import React, { Component } from 'react';
//import {connect} from 'react-redux'
//import {requestNavData} from '../../../store/modules/home'
import Header from '../../../components/app-header/index'
import Banner from './children/home_banner/banner'
import Nav from './children/home_nav/nav'
import AppScroll from '../../../components/app-scroll/AppScroll'

export default class Home extends Component {
    render() {
        return (
            <div className="page" id="home">
              <AppScroll>
              <Header/>
              <Banner/>
              <Nav/>
            </AppScroll>
            </div>
        );
    }
    componentDidMount(){
        //请求导航栏数据
       // this.props.getNavData();
    }
}
// const mapStateToProps = (state,props)=>({})
// const mapDispatchToProps = (dispatch,props)=>({})

// export default connect(mapStateToProps, mapDispatchToProps)(Home);