import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon,Carousel } from 'antd'
import Header from './../Header/header' 
import TopOne from './../TopOne/topone'
var Shicss = require('./shi.css');

export default class Shi extends React.Component {

    render() {
        return (
            <div className={Shicss.shi}>
                <Header/>
                <TopOne/>
                <div className={Shicss.b}>
                    <div className={Shicss.c}>
                        <div className={Shicss.aa}>
                        <Carousel autoplay>
                           <div>  <img src='./../TUPIAN/24.jpg' alt='' height="280px" width="100%"></img> </div>
                           <div>  <img src='./../TUPIAN/35.jpg' alt='' height="280px" width="100%"></img> </div>
                           <div>  <img src='./../TUPIAN/36.jpg' alt='' height="280px" width="100%"></img> </div>
                            </Carousel>
                             </div>
                        <div className={Shicss.aa}>
                            <Link to="/yuoxipage"> <div className={Shicss.aa1}><Button type="primary" size="large"><Icon type="home" />游戏首页</Button> </div> </Link>
                            <Link to="/xia"> <div className={Shicss.aa2}><Button type="primary" size="large"><Icon type="download" />游戏下载</Button> </div> </Link>
                            <Link to="/gong"> <div className={Shicss.aa3}><Button type="primary" size="large"><Icon type="hdd" />游戏攻略 </Button> </div> </Link>
                        </div>
                        <div className={Shicss.aa}><img src='./../TUPIAN/15.jpg' alt='' height="100%" width="100%"></img></div>
                        <hr></hr>
                        <div className={Shicss.bb}>游戏视频</div>
                        <div className={Shicss.cc}>
                             <iframe frameborder="0" width="960" height="460" src="https://v.qq.com/iframe/player.html?vid=i0670jbe37a" allowfullscreen>
                            </iframe>
                            <video src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" poster="./../TUPIAN/17.png"
                                preload="metadata" controls="controls" loop="-1">
                            </video>
                        </div>
                        <br></br><br></br>
                        <div className={Shicss.dd}><br></br><a><div className={Shicss.dd1}>更多高清游戏视频<Icon type="forward" /></div></a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}