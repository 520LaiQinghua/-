import React, { Component } from 'react';
import './nav.css'
import {NavLink} from 'react-router-dom'
class nav extends Component {
    state= {}
    render() {
      let data = [
          {id:1,title:"微专业",url:'https://edu-image.nosdn.127.net/fbbf1cfc-45f2-4a42-bcbb-df5cad63d3c2.png?imageView&quality=100&thumbnail=103y103',path:'/mine'},
          {id:2,title:"职场提升",url:'https://edu-image.nosdn.127.net/23444883-fc1a-4972-8a22-591e5b790ee0.png?imageView&quality=100&thumbnail=103y103',path:'/mine'},
          {id:3,title:"编程开发",url:'https://edu-image.nosdn.127.net/b216231d-4b93-4d5c-8e7c-e22389f194b8.png?imageView&quality=100&thumbnail=103y103',path:'/mine'},
          {id:4,title:"人工智能",url:'https://edu-image.nosdn.127.net/55329cd44f7142c7b2eaaca1a68e2430.png?imageView&quality=100&thumbnail=103y103',path:'/learn/enroll'},
          {id:5,title:"产品运营",url:'https://edu-image.nosdn.127.net/8f2db166988542c2b720f418e6330500.png?imageView&quality=100&thumbnail=103y103',path:'/mine'},
          {id:6,title:"设计创意",url:'https://edu-image.nosdn.127.net/dd3fdff7aeea4b37af8d623be3695331.png?imageView&quality=100&thumbnail=103y103',path:'/mine'},
          {id:7,title:"子商务",url:'https://edu-image.nosdn.127.net/c0c090e1872748ff8cec40ed03b3e476.png?imageView&quality=100&thumbnail=103y103',path:'/mine'},
          {id:8,title:"语言学习",url:'https://edu-image.nosdn.127.net/fd322af24d8947a8961b99c42b8261e8.png?imageView&quality=100&thumbnail=103y103',path:'/mine'},
      ]
        return (
            <nav id="label">
            <ul>
               {
                   data.map(item=>(
                       <NavLink key={item.id} to={item.path} className="label_item">
                        <img src={item.url} alt=""/>
                        <p>{item.title}</p> 
                       </NavLink>
                   ))
               }
            </ul>
        </nav>
        );
    }
}

export default nav;