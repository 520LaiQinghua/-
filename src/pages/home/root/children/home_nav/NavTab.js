import React, { Component } from 'react';

import './nav.css'
 export default class NavTab extends Component {
    state={
      selectedIndex:0
    }
  
  render() {
    let navs = [
      { id:2221,title: '职业提升' },
      { id:2222,title: '编程与开发' },
      { id:2223,title: 'AI/数据科学' },
      { id:2224,title: '产品与运营' },
      { id:2225,title: '设计创意' },
      { id:2226,title: '电商运营' },
      { id:2227,title: '语音学习' },
      { id:2228,title: '职业考试' },
      { id:2229,title: '生活兴趣' },
    ]
    return (
      <div id="nav">
        <ul>
      {
       navs.map((item,index)=>(
         <li key={item.id}
          onClick={()=>this.selectedIndex(index)}
          className={this.state.selectedIndex === index? 'nav_active':''}>
         {item.title}
         </li>
       ))
      }
      </ul>
      </div>
    );
  }
  selectedIndex=(index)=>{
    this.setState({selectedIndex:index})
    // this.props.receivedIndex(index)
  }
}

