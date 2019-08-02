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
        let Return =<span className="iconfont icon-changyongicon-1" onClick={this.handleReturn}></span>
        // let { currentIndex} = this.state
        return (
            <div>
               <Header props={this.props} Return={Return}/> 
               <NavTab receivedIndex={this.receivedIndex} props={this.props}/>
                <AppScroll className="scrollContent">
                 <div>
                     <section>
                      <ul>
                          <li>个人理财</li>
                          <li>个人理财</li>
                          <li>个人理财</li>
                          <li>个人理财</li>
                          <li>个人理财</li>
                          <li>个人理财</li>
                          <li>个人理财</li>
                      </ul>
                     </section>
                     <section>

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