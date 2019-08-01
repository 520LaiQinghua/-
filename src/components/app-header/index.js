import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.scss'

export default (props)=> (
    <div>
    <header id="header">
 <ul>
      {props.Return}
     <li><img src="https://nos.netease.com/edu-image/a9333338-6b0e-4e56-a34a-77b2a2268b4a.png?imageView&quality=100" alt="网易云课堂"/></li>
     <NavLink to='/home/search' className="search"></NavLink>
      {props.Button}
 </ul>
</header> 
 </div>  
)





