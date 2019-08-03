import React, { Component } from 'react';
import '../children.css'
import {Link} from 'react-router-dom'
class specialSubject extends Component {
    render() {
         let data = [
             {id:100,url:"https://edu-image.nosdn.127.net/307e3bbd-0b8f-4166-a8ad-a694476020e8.png?imageView&quality=100&thumbnail=690y272", path:"home/subject_son"},
             {id:101,url:"https://edu-image.nosdn.127.net/d078fac6-cb60-4e6b-a57e-cdc0c4c4b594.png?imageView&quality=100&thumbnail=690y272", path:"home/subject_son"},
             {id:102, url:"https://edu-image.nosdn.127.net/5667C893D177F9CEA3AD655CE9F02F7F.jpg?imageView&quality=100&thumbnail=690y272", path:"home/subject_son"}
         ]
        return (
            <div>
                 <div className="theme2">
					<h2>专题</h2>
					{
                       data.map(item=>(
                       <Link key={item.id}  to={item.path+"/"+item.id}>    
					<img  src={item.url} alt="" />
				      </Link>
                       ))
                    }
				</div>
            </div>
        );
    }
}

export default specialSubject;