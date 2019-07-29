import React, { Component } from 'react';
import './enroll.css'
class Enroll extends Component {
    render() {
        return (
            <div>
                <main id="enroll">
			<ul class="enroll_list">
				 {/* 手机号  */}
				<li>
					<input type="text" placeholder="请输入您的手机号"/>
				</li>
				 {/* 密码  */}
				<li>
				<input type="password" placeholder="请输入您觉得独一无二的密码"/>	
				</li>
			 {/* 拖动滑块  */}
				<li>向右拖动滑块</li>
				 {/* 显示错误信息 */}
				<p>您输入的手机号有误</p>
				 {/* 注册 */}
				<li class="cli">注册</li>
			</ul>
			<div class="checked">
				 <input type="checkbox"/>
				我同意《用户使用协议》和《隐私政策》
			</div>
		</main>
            </div>
        );
    }
}

export default Enroll;