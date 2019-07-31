import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './header.scss'

export default class index extends Component {
    render() {
       // console.log(this.props.props);
        
        return (
            <div>
               <header id="header">
			<ul>
				<li><img src="https://nos.netease.com/edu-image/a9333338-6b0e-4e56-a34a-77b2a2268b4a.png?imageView&quality=100" alt="网易云课堂"/></li>
				<NavLink to='/home/search' className="search"></NavLink>
				<li><button type="button" onClick={this.handleSearch} >搜索</button></li>
			</ul>
		</header> 
            </div>
        );
    }
    handleSearch=()=>{
        this.props.props.history.push('/home/search');
    }
   
}



