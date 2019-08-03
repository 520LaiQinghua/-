import React, { Component } from 'react';
import Header from '../../../../../components/app-header/index'
import AppScroll from '../../../../../components/app-scroll/AppScroll'
import {Link} from 'react-router-dom'
import '../home_goodLesson/goodLesson.css'
class subject_son extends Component {
    state={
        id:this.props.match.params,
        
        
    }
   
    
    render() {
        // console.log(this.state.id);
        
        let {id} = this.state.id
      
      
        let Return =<span className="iconfont icon-changyongicon-1" onClick={this.handleReturn}></span>
        let imgs=[
                    {
                        id:100,
                        path:"/home/goodLesson_son/12",
                        img1:"https://edu-image.nosdn.127.net/36076181-6c33-444a-a3f4-722a1140f15c.jpg?imageView&quality=100&type=webp",
                        img2:"https://edu-image.nosdn.127.net/a96141f55edf4309b365a1e8ffb59a82.jpg?imageView&quality=100&type=webp",
                        img3:"https://edu-image.nosdn.127.net/4f00823f-ab7c-43cb-918d-89ee24d3ea2f.jpg?imageView&quality=100&type=webp",
                        img4:"https://edu-image.nosdn.127.net/fd37869c-362a-414f-8752-d9fe7aec4785.jpg?imageView&quality=100&type=webp",
                        img5:"https://edu-image.nosdn.127.net/135121f0-c63e-4c18-94e5-eb93dac130df.jpg?imageView&quality=100&type=webp"},
                    {
                        id:101,
                        path:"/home/interest_son/75",
                        img1:"https://edu-image.nosdn.127.net/b4b431d3-26c3-4906-baa0-78afe4209c9b.png?imageView&quality=100&type=webp",
                        img2:"https://edu-image.nosdn.127.net/31f2de0617d74dc48f9e43e0fa607e03.jpg?imageView&quality=100&type=webp",
                        img3:"https://edu-image.nosdn.127.net/ecaca0a1-5281-4df6-af82-f7c21955e17e.jpg?imageView&quality=100&type=webp",
                        img4:"https://edu-image.nosdn.127.net/af3403da-e205-4ac5-9e24-ff330b61345d.jpg?imageView&quality=100&type=webp",
                        img5:"https://edu-image.nosdn.127.net/b8b849af-5fe7-446b-adb6-d095693b928e.jpg?imageView&quality=100&type=webp"},
                    {
                        id:102,
                        path:"/home/career_son/22",
                        img1:"https://edu-image.nosdn.127.net/faf683e3-9528-42f4-a016-f61296746282.jpg?imageView&quality=100&type=webp",
                        img2:"https://edu-image.nosdn.127.net/08179d61-cd3b-4b7d-b819-550875bc72fa.jpg?imageView&quality=100&type=webp",
                        img3:"https://edu-image.nosdn.127.net/55568cfb-f8e5-49e6-ba59-cf7f2628d045.jpg?imageView&quality=100&type=webp",
                        img4:"https://edu-image.nosdn.127.net/faf683e3-9528-42f4-a016-f61296746282.jpg?imageView&quality=100&type=webp",
                        img5:"https://edu-image.nosdn.127.net/bdf08f15-dba4-408e-8690-fdefa793d8f3.jpg?imageView&quality=100&type=webp"}
        ]
        let imgsData = imgs.filter((item)=>(
            item.id == id? item:''
           
          ))
        return (
            <div>
              <Header props={this.props} Return={Return}/>
            <AppScroll className="scrollSon">

         
           {
                  imgsData.map(item=>(
                    <Link className="lessonDetail" key={item.id} to={item.path}>
                   
                    <section className="lessonDetail3">
                        <img src={item.img1} alt=""/>
                        <img src={item.img2} alt=""/>
                        <img src={item.img3} alt=""/>
                        <img src={item.img4} alt=""/>
                        <img src={item.img5} alt=""/>
                      
                    </section>
                   
                    </Link>
                   ))
                
              }
         
         </AppScroll>
            </div>
        );
    }
    handleReturn=()=>{
        this.props.history.goBack();
        }
}

export default subject_son;