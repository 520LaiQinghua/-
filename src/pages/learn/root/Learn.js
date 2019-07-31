import React, { Component } from 'react';
import './learn.css'
class Learn extends Component {
	state= {}
    render() {
		const lis = [
            {id: 1,title:'手机号登录', basicPath: '/learn/login', path: '/login'},
            {id: 2, title:'手机号快捷注册', basicPath: '/learn/enroll', path: '/enroll'},
          
		]
		 //  根据地址栏当前的地址判断那个tabItem选中了
		 //let selectIndex = lis.findIndex(item=>this.state.currentPath.startsWith(item.basicPath));

        return (
            <div>
               <main id="main">
			<section className="chioce">
				<img src="https://edu-image.nosdn.127.net/c26ea87a-f364-4b52-97d0-dce9851d7761.png?imageView&quality=100" alt='网易云课堂'/>
				<ul className="way">
                    {
						   lis.map((item, index)=>(
							<li key={item.id} onClick={()=>this.changeLis(index, item.basicPath)}>
									{item.title}
							</li>	
						))
					}
				</ul>
			</section>
			
			<section className="other">
				<div className="part">
					 {/* <span className="line"></span>  */}
					<span className="dit">其他方式登录</span>
					 {/* <span className="line"></span>  */}
				</div>
				<ul className="otherWays">
					<li>
					<img src="https://edu-image.nosdn.127.net/8d0ce296-9f92-4f3b-b6fe-8d727a323064.png?imageView&quality=100" alt=""/> 
					<p>邮箱</p>
					</li>
					<li>
					<img src="https://edu-image.nosdn.127.net/15c811d3-6a3d-459b-b100-3f4eb776b2c2.png?imageView&quality=100" alt=""/> 
					<p>微博</p>	
					</li>
					<li>
					<img src="https://edu-image.nosdn.127.net/9bd019b4-f657-4674-8550-212d47128d60.png?imageView&quality=100" alt=""/>
					<p>QQ</p>
					</li>
					<li>
					<img src="https://edu-image.nosdn.127.net/84c18e49-200b-440d-a15c-db363e4b132d.png?imageView&quality=100" alt=""/>
					<p>人人网</p>
					</li>
				</ul>
			</section>
		</main>
            </div>
        );
	}
	
	changeLis = (index, path)=>{
		// 切换页面
		//console.log(this.props);
		
		this.props.history.push(path);
		
    }


    static getDerivedStateFromProps(props, state){
        return {
            // 取出当前地址栏的地址
            currentPath: props.location.pathname
        }
    }
}

export default Learn;