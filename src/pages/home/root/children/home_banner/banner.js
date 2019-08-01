import React, { Component, createRef } from 'react';
import './banner.css'

export default class Banner extends Component {
 
    constructor(props) {
        super(props);
        this.container  = createRef();
    }
    
    render() {
      let data = this.props.data;
     
      return (
        <div className="banner swiper-container"  ref={this.container}>
          <div className="swiper-wrapper">
          {
              data.map(item=>(
                  <div className="swiper-slide banner_img"
                      key={item.id} onClick={()=>this.handleBanner(item.id)}>
                      <img src={item.url} alt="来我们这儿学吧"/>
                  </div>
              ))
          }
          </div>
          <div className="swiper-pagination" />
        </div>
      );
    }
  
    componentDidMount() {
      // 构建轮播图
      this.swiper = new window.Swiper(this.container.current, {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 1000,
          autoplayDisableOnInteraction:false,
      });
  
     
    }
  
    componentDidUpdate(oldProps) {
      
      if(this.props.data !== oldProps.data){

          //data数据的变化，导致dom更新
          // 更新轮播图
          this.swiper.update();
          this.swiper.reLoop();
  
          this.swiper.slideTo(1, 0);
      }
    }

    handleBanner = (id)=>{
      this.props.props.history.push('/home/banner_son/'+id);
    
  }
    
  }