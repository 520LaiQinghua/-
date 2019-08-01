import React, { Component } from 'react';
import AppScroll from '../../../../../components/app-scroll/AppScroll';
import './banner.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {requestBannerData} from '../../../../../store/modules/home_banner'
import Header  from '../../../../../components/app-header/index'
class banner_son extends Component {
    
    state={
        id:this.props.match.params,
        
    }
   
    render() {
       
        let {id} = this.state.id
        let {banner} =  this.props
        //console.log(banner);
      
         
        
        let bannerData = banner.filter((item)=>(
          item.id == id? item:''
         
        ))
       
        
        let Return =<span className="iconfont icon-changyongicon-1" onClick={this.handleReturn}></span>
      
        return (
           <div>
                <Header props={this.props} Return={Return}/>
                <AppScroll className="scrollContent">
                

              {
                   bannerData.map(item=>(
                    <div className="bannerDetail" key={item.id}>
                    <section className="bannerDetail1"><img src={item.url} alt=""/></section>
                    <section className="bannerDetail2">
                        <h2>《{item.title}》</h2>
                        <h4>￥<strong>{item.price}</strong><span>原价￥{item.oldprice}</span></h4>
                        </section>
                    <section className="bannerDetail3">
                        <img src={item.img1} alt=""/>
                        <img src={item.img2} alt=""/>
                    </section>
                    </div>
                   ))
                
              }
              
            
            </AppScroll>
            <footer id="foot">
             <NavLink className="buy" to='/payment'>立即购买</NavLink>
            </footer>
           </div>
        );
    }
    componentDidMount(){
       //请求轮播图的数据
       this.props.getBannerData();  
    }
    handleReturn=()=>{
        this.props.history.goBack();
        }
}
const mapStateToProps  = (state,props)=>({
    banner: state.banner.banner,
})
const mapDispatchToProps = (dispatch,props)=>({
  // 调用请求轮播图数据的函数
  getBannerData(){
    let action = requestBannerData();
    dispatch(action);
},
})

export default connect(mapStateToProps, mapDispatchToProps)(banner_son);