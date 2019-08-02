import React, { Component } from 'react';
import Header from '../../../../../components/app-header/index'
import AppScroll from '../../../../../components/app-scroll/AppScroll'
class career_son extends Component {
    render() {
        let Return =<span className="iconfont icon-changyongicon-1" onClick={this.handleReturn}></span>
        return (
            <div>
                <Header props={this.props} Return={Return}/>
                <AppScroll className="scrollContent">
                 <h1>career_son</h1>
             </AppScroll>
            </div>
        );
    }
    handleReturn=()=>{
        this.props.history.goBack();
        }
}

export default career_son;