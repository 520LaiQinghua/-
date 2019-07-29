import React, { Component } from 'react';
import './login.css'
class Login extends Component {
    render() {
		// console.log(1111)
        return (
          
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
				<p>您输入的手机号有误</p>
				 {/* 注册  */}
				<li className="cli">登录</li>
			</ul>
			<div className="checked">
				 <input type="checkbox"/>
				十天内免登录|<a href="https://mob.163.com/web/passwdfind">忘记密码？</a>
				
			</div>
		</main>
           
        );
    }
}

export default Login;