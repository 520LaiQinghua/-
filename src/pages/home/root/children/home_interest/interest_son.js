import React, { Component } from 'react';
import Header from '../../../../../components/app-header/index'
import AppScroll from '../../../../../components/app-scroll/AppScroll'
import SonFooter from '../../../../common/sonfooter/SonFooter'
import {connect} from 'react-redux'

import {requestInterestData} from "../../../../../store/modules/home_interest"
import '../home_goodLesson/goodLesson.css'
class interest_son extends Component {
    state={
        id:this.props.match.params,
        
    }
    render() {
        let {id} = this.state.id
        let {interest} =  this.props
        let interestData = interest.filter((item)=>(
            item.id == id? item:''
           
          ))
        let Return =<span className="iconfont icon-changyongicon-1" onClick={this.handleReturn}></span>
        return (
            <div>
            <Header props={this.props} Return={Return}/>
            <AppScroll className="scrollContent">
            {
                   interestData.map(item=>(
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
}

const mapStateToProps  = (state,props)=>({
    interest:state.interest.interest,
})
const mapDispatchToProps = (dispatch,props)=>({
  
  getGoodLessonData(){
    let action = requestInterestData();
    dispatch(action);
},

})
export default connect(mapStateToProps, mapDispatchToProps)(interest_son);