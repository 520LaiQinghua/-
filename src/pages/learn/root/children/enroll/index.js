import React, { Component } from 'react';
import './enroll.css'
import Header from '../../../../../components/app-header/index'
import Cookie from '../../../../../utils/cookie'
class Enroll extends Component {
	constructor(props){
		super(props)
		this.state={
			inputValUser:'',
			inputValPass:'',	
			isShow:'none'
		}
	}
    render() {
		let Return =<span className="iconfont icon-changyongicon-1" onClick={this.handleReturn}></span>;
        let {inputValUser,inputValPass, isShow} = this.state;
        return (
			
            <div>
				 <Header props={this.props} Return={Return}/>
                <main id="enroll">
			<ul className="enroll_list">
				 {/* 手机号  */}
				<li>
				
					<input type="number" onBlur={this. inputUserName.bind(this)} onChange={this.actionUserName} value={inputValUser} placeholder="请输入您的11纯数字手机号"/>
				</li>
				 {/* 密码  */}
				<li>
				
				<input type="password" onBlur={this.inputPassWord.bind(this)} onChange={this.actionPassword}  value={inputValPass}  placeholder="请输入6~18位包含数字和字母的密码"/>	
				</li>
			 {/* 拖动滑块  */}
				{/* <li>向右拖动滑块</li> */}
				 {/* 显示错误信息 */}
				<p style={{display:isShow}}>您未输入不能位空且格式要正确的喔！</p>
				 {/* 注册 */}
				 
				<li className="cli" onClick={this.handleEnroll.bind(this)}>注册</li>
			</ul>
			<div className="checked">
				 <input type="checkbox" checked="checked"  onChange={this.actionCheckbox}/>
				我同意《用户使用协议》和《隐私政策》
			</div>
		</main>
            </div>
        );
	}
	//头部返回键按钮的点击事件
	handleReturn=()=>{
        this.props.history.goBack();
		}
		//绑定输入的手机号
		actionUserName=(ev)=>{
			this.setState({inputValUser: ev.target.value});
		}
		//绑定输入的密码
		actionPassword=(ev)=>{
			this.setState({inputValPass: ev.target.value});
		}
		//绑定勾选按钮
		actionCheckbox=(ev)=>{
			// this.setState({inputValPass: ev.target.value});
		}
	//  手机号码验证
	 inputUserName=()=>{
		console.log(this.state.inputValUser)
		let userNameReg = /^(1|\+861)[3-9][0-9]{9}$/g;
         if((!this.state.inputValUser == '')&&(userNameReg.test(this.state.inputValUser))){
			this.setState({isShow:'none'}); 
	 }else{
		this.setState({isShow:''}); 
	 }
	}
		
	  
	//   密码验证
	  inputPassWord() {
		let passWordReg = /^[0-9a-zA-Z]{6,18}$/g;
		if ((!this.state.inputValPass == '')&&(passWordReg.test(this.state.inputValPass))) {
			this.setState({isShow:'none'}); 
		}else{
			this.setState({isShow:''});
		}
	  }	
		//点击注册按钮的事件
	handleEnroll(){
		let getCookie = Cookie.getCookie;
		let setCookie = Cookie.setCookie;
		if((!this.state.inputValPass == '')&&((!this.state.inputValUser == ''))&&(this.state.isShow=='none')){
			setCookie(this.state.inputValUser,7);
			setCookie(this.state.inputValPass,7);
			this.props.history.push('/learn/login')
		}else{
			
			this.setState({isShow:''});
		}
	
	}
	
}



export default Enroll;