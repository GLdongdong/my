import React from 'react';
import {Input,Button,message} from 'antd';
import {Link} from 'react-router-dom';
import Axios from 'axios';


const info = () => {
    message.info('注册成功');
  };

var RegisterCss = require('./register.css');
export default class Signin extends React.Component{ 
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload = ()=>{
        var data={
            "username":this.state.username,
            "password":this.state.password,
            "name":this.state.name,
            "age":this.state.age,
            "gender":this.state.gender
        }
        //axios
        // Axios.post({
        //     url:"user/register",
        //     data:JSON.stringify(data)
        // }).then(result=>{
        //     if(result.state==2){
        //         console.
        //         message.info("用户名已存在")
        //     }else if(result.state==1){
        //         message.info("注册成功")
        //     }
        // })
        //fetch
        fetch("/user/register",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(result=>{
            if(result.state==2){
                message.info("用户名已存在")
            }else if(result.state==1){
                message.info("注册成功")
            }
        }).catch(e=>{
            message.error(e);
        })
    }
    render(){
        return(
            <div className={RegisterCss.all}>
                <div className={RegisterCss.signinpage}>
                    <div className={RegisterCss.signinhead}>
                        欢迎您注册账号
                    </div>
                    <div className={RegisterCss.signincon}>
                        <div className={RegisterCss.scinput}>
                            <Input placeholder="账号" type="text" name="username"  value={this.state.username} onChange={e=>this.changeValue(e)}/>
                            <Input className={RegisterCss.scipassword} placeholder="密码" type="password" name="password"value={this.state.password} onChange={e=>this.changeValue(e)}/>
                            <Input className={RegisterCss.scipassword1} placeholder="姓名" type="text" name="name" value={this.state.name} onChange={e=>this.changeValue(e)}/>
                            <Input className={RegisterCss.scipassword2} placeholder="年龄" type="text" name="age"  value={this.state.age} onChange={e=>this.changeValue(e)}/>
                            <Input className={RegisterCss.scipassword3} placeholder="性别" type="gender" name="gender" value={this.state.gender} onChange={e=>this.changeValue(e)}/>
                        </div>
                        <Button className={RegisterCss.scbutton} type="primary" onClick={this.upload}>立即注册</Button>
                        <br></br><br></br><Link to="/login"><Button className={RegisterCss.scbutton} type="primary">立即登陆</Button></Link>
                    </div>
                </div>
            </div>
        )
    }
}