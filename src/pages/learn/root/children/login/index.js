import React, { Component } from 'react';
import './login.css'
import Header from '../../../../../components/app-header/index'
class Login extends Component {
	state={
		isShow:"none"
		}
    render() {
		let Return =<span className="iconfont icon-changyongicon-1" onClick={this.handleReturn}></span>;
	
        return (
			<div>
				<Header props={this.props} Return={Return}/>
               <main id="login">
			<ul className="login_list">
			 {/* 手机号  */}
				<li>
					<input type="text" placeholder="请输入手机号" />
				</li>
				 {/* 密码 */}
				<li>
				<input type="password" placeholder="请输入密码" />	
				</li>
				
				 {/* 显示错误信息 */}
				<p style={{display:this.state.isShow}}>您未输入正确的格式喔！</p>
				 {/* 注册  */}
				<li className="cli">登录</li>
			</ul>
			<div className="checked">
				 <input type="checkbox"/>
				十天内免登录|<a href="https://mob.163.com/web/passwdfind">忘记密码？</a>
				
			</div>
		</main>
			</div>
           
        );
	}
	handleReturn=()=>{
        this.props.history.goBack();
        }
}

export default Login;