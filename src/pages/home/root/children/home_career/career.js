import React, { Component } from 'react';
import  '../children.css'
export default class career extends Component {
    constructor(props){
      super(props);
    }
    render() {
        let data = this.props.data;
        //console.log(data);
        
        return (
            <div>
            <div className="theme3">
                <h2>职业提升</h2>
                <ul>
                    {
                        data.map(item => (
                            <li key={item.id}>
                                <img src={item.photoUrl} alt=""/>
                                <p>{item.name}</p>
                                <p className="price">价格：￥<strong>{item.price}</strong></p>
                            </li>
                        ))
                    }

                </ul>
            </div>

        </div>
        );
    }
    componentDidUpdate(oldProps){
		if(this.props.data !== oldProps.data){

		}
	}
}

