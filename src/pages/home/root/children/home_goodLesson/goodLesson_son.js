import React, { Component } from 'react';
import Header from '../../../../../components/app-header/index'
import AppScroll from '../../../../../components/app-scroll/AppScroll'
import SonFooter from '../../../../common/sonfooter/SonFooter'
import {connect} from 'react-redux'

import {requestGoodLessonData} from "../../../../../store/modules/home_goodLesson"
import './goodLesson.css'
class goodLesson_son extends Component {
    state={
        id:this.props.match.params,
        
    }
    render() {
        let {id} = this.state.id
        let {goodLesson} =  this.props
        let goodLessonData = goodLesson.filter((item)=>(
            item.id == id? item:''
           
          ))
        let Return =<span className="iconfont icon-changyongicon-1" onClick={this.handleReturn}></span>
        return (
            <div>
            <Header props={this.props} Return={Return}/>
            <AppScroll className="scrollContent">
            {
                   goodLessonData.map(item=>(
                    <div className="lessonDetail" key={item.id}>
                    <section className="lessonDetail1"><img src={item.bg} alt=""/></section>
                    <section className="lessonDetail2">
                        <h2>《{item.name}》</h2>
                        <h4>￥<strong>{item.price}</strong><span>原价￥{item.oldprice}</span></h4>
                        </section>
                        <section className="lessonDetail4" dangerouslySetInnerHTML={{__html:item.decri}}></section>
                    <section className="lessonDetail3">
                        <img src={item.img1} alt=""/>
                        <img src={item.img2} alt=""/>
                    </section>
                    </div>
                   ))
                
              }
         </AppScroll>
          <SonFooter/>
         </div>
        );
    }
    handleReturn=()=>{
        this.props.history.goBack();
        }
        componentDidMount(){
            //请求轮播图的数据
            this.props.getGoodLessonData();  
         }
}
const mapStateToProps  = (state,props)=>({
    goodLesson:state.goodLesson.goodLesson,
})
const mapDispatchToProps = (dispatch,props)=>({
  // 调用请求轮播图数据的函数
  getGoodLessonData(){
    let action = requestGoodLessonData();
    dispatch(action);
},

})
export default connect(mapStateToProps, mapDispatchToProps)(goodLesson_son);
