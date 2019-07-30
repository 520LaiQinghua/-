import React, { Component } from 'react';
import '../children.css'
export default class goodLesson extends Component {
	constructor(props){
	  super(props);
	
	}
    render() {
		 let data = this.props.data;
		
		 
        return (
			<div>
				<div className="theme1">
					<h2>畅销好课</h2>
					<ul>
						{
							data.map(item => (
								<li key={item.id}>
									<img src={item.photoUrl} alt=""/>
									<p>{item.name}</p>
									<p  className="price">价格：￥<strong>{item.price}</strong></p>
								</li>
							))
						}

					</ul>
				</div>

			</div>
        );
	}
	componentDidMount(){

	}
	componentDidUpdate(oldProps){
		if(this.props.data !== oldProps.data){

		}
	}
}

 