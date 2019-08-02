import React, { Component } from 'react';
import AppScroll from '../../../../../components/app-scroll/AppScroll'
import './nav.css'

import Header from '../../../../../components/app-header/index'
import NavTab from './NavTab'
class nav_son extends Component {
    state={ 
        // currentIndex:0,
        // id:this.props.match.params,
        receivedIndex:0
    }

    render() {

        let data = [
           
            {id:1109,title:"轻松手绘",img:"http://edu-image.nosdn.127.net/44904b07f9d5471fbc7700abe7633354.jpg?imageView&quality=100"},
            {id:2109,title:"让你的图表动起来",img:"http://edu-image.nosdn.127.net/0f5ad1cf-9920-4356-8420-14baf6592c91.jpg?imageView&quality=100"},
            {id:3109,title:"时间管理：每天多出2小时",img:"http://edu-image.nosdn.127.net/831eb0ada6674c93b0e3477af2d30d76.jpg?imageView&quality=100"},
            {id:4109,title:"谈判路线图",img:"http://edu-image.nosdn.127.net/b8e3594d13e7401c94d8c8b1e46d5713.jpg?imageView&quality=100"},
            {id:5109,title:"真正的跳槽技巧，是什么样子的？",img:"http://edu-image.nosdn.127.net/c1773aaa82844c0cbb07f6ae47759dc0.jpg?imageView&quality=100"},
            {id:6109,title:"和贺嘉一起学演讲",img:"http://edu-image.nosdn.127.net/28a543656cb84f149bf065778c0f29ba.jpg?imageView&quality=100"},
          
        ]
        let Return =<span className="iconfont icon-changyongicon-1" onClick={this.handleReturn}></span>
        // let { currentIndex} = this.state
        return (
            <div > 
               <Header props={this.props} Return={Return}/> 
               <NavTab receivedIndex={this.receivedIndex} props={this.props}/>
                <AppScroll className="scrollNav">
                 <div className="con">
                     <section className="navBanner">
                      <div className="ani">

                      </div>
                     </section>
                     <section className="oterTit border-bottom">
                      <ul>
                          <li>Excel</li>
                          <li>职场能力</li>
                          <li>个人提升</li>
                          
                          <li>求职准备</li>
                          <li>效率工具</li>
                          <li>商业管理</li>
                      </ul>
                     </section>
                     <section className="theme1">
                     
				
                    	<h2>品质精选</h2>
                        <ul>
                                    {
                                        data.map((item,index)=>(
                                            <li key={ImageBitmapRenderingContext.id}>
                                            <img src={item.img} alt=""/>
                                            <p>{item.title}</p>
                                            
                                        </li>
                                        ))
                                       
                                    }
                        </ul>
                        
                
                     </section>
                 </div>
                </AppScroll>
            </div>
        );
    }
    handleReturn=()=>{
        this.props.history.goBack();
        }
}

export default nav_son;