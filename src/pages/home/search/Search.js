import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import AppScroll from '../../../components/app-scroll/AppScroll'
import './search.css'
import Header from '../../../components/app-header/index'

class Search extends Component {
    render() {
        let Return =<span className="iconfont icon-changyongicon-1" onClick={this.handleReturn}></span>;
        let data=[
            {id:1127801,name:"测试高级工程师，专家亲授",path:'/home'},
            {id:1123951,name:"Python数据分析高薪秘籍",path:'/mine'},
            {id:1126901,name:"UI设计师全链路培养计划",path:'/mine'},
            {id:1141401,name:"安卓高级开发，核心突破",path:'/learn'},
            {id:1123952,name:"UI设计师全链路培养计划",path:'/learn/login'},
           
        ]
        return (
         <div>
                <Header props={this.props} Return={Return}/>
                <AppScroll className="scrollSearch">
               <div className="pageSearch">
               <h3>热门搜索，点击搜索</h3>
               <ul>
                   {
                       data.map(item=>(
                        <NavLink className="hotSearch" key={item.id} to={item.path}>
                          {item.name}
                        </NavLink>
                       ))
                      
                   }
               </ul>
            </div>
            </AppScroll>
         </div>
        );
    }
    handleReturn=()=>{
        this.props.history.goBack();
        }
}

export default Search;