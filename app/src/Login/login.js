import React from 'react'
import { Dropdown, Button, Menu,message}from 'antd'
import {Link} from 'react-router-dom';


var LoginCss = require('./login.css')
export default class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    login = ()=>{
        var data={
            "username":this.state.username,
            "password":this.state.password
        }
        fetch("/user/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(result=>{
            if(result.state==1){
                message.info("登陆成功")
                this.props.history.push('/homepage')
            }else if(result.state==2){
                message.info("用户名或密码错误")
            }
        }).catch(e=>{
            message.error(e);
        })
    }
    render(){
        console.log(LoginCss)
        return(
            <div className={LoginCss.all}>
            
                <div className={LoginCss.loginpage}>
                    <div className={LoginCss.loginhead}>欢迎您登录Champions League</div>
                    <div className={LoginCss.logincon}>
                        <div className={LoginCss.loginput}>
                            <input type="text" name="username"  value={this.state.username} onChange={e=>this.changeValue(e)}
                            className={LoginCss.account} placeholder="账号"></input>
                            <input type="password" name="password"  value={this.state.password} onChange={e=>this.changeValue(e)}
                            className={LoginCss.password} placeholder="密码"></input>
                        </div>
                        <div className={LoginCss.loginbutton}>
                            <Button className={LoginCss.log} type="primary" onClick={this.login}>登录</Button>
                            <Link to="/register"><Button className={LoginCss.sign} type="primary">注册</Button></Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
} 