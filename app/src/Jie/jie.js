import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon,Carousel } from 'antd'
import TopOne from '../TopOne/topone';
import Header from './../Header/header' 
var Jiecss = require('./jie.css');

export default class Jie extends React.Component {

    render() {
        return (
            <div className={Jiecss.Jie}>
               <Header/>
               <TopOne/>
                <div className={Jiecss.b}>
                    <div className={Jiecss.c}>
                        <div className={Jiecss.aa}> 
                        <Carousel autoplay>
                           <div>  <img src='./../TUPIAN/30.jpg' alt='' height="280px" width="100%"></img> </div>
                           <div>  <img src='./../TUPIAN/31.jpg' alt='' height="280px" width="100%"></img> </div>
                           <div>  <img src='./../TUPIAN/34.jpg' alt='' height="280px" width="100%"></img> </div>
                            </Carousel>
                             </div>
                        <div className={Jiecss.aa}>
                            <Link to="/yuoxipage"> <div className={Jiecss.aa1}><Button type="primary" size="large"><Icon type="home" />游戏首页</Button> </div> </Link>
                            <Link to="/xia"> <div className={Jiecss.aa2}><Button type="primary" size="large"><Icon type="download" />游戏下载</Button> </div> </Link>
                            <Link to="/gong"> <div className={Jiecss.aa3}><Button type="primary" size="large"><Icon type="hdd" />游戏攻略 </Button> </div> </Link>
                        </div>
                        <div className={Jiecss.aa}><img src='./../TUPIAN/15.jpg' alt='' height="100%" width="100%"></img></div>
                        <hr></hr>
                        <div className={Jiecss.bb}>游戏介绍</div>
                        <div className={Jiecss.cc}>
                            作为潜行谍战类游戏的鼻祖，《刺客信条：幻痛》以架空背景下的全球冷战为题材，且采用开放世界设定
，玩家可以自由选择潜入的路径、攻略的方式和脱逃的路线，使得游戏更多元化。游戏拥有写实的画面风格和紧张刺激的游玩体验，旨在提供一流的代入感
。同时采用FOX引擎制作在游戏画面上有相当不俗的表现。
                                     官方故事梗概：“苏联入侵阿富汗令美苏冷战更加恶化。在1984年，一名独眼，带有一支假臂的男子来到了这个国家。知道他的人称他为Snake。
之前的身份是一名传奇雇佣兵，随着时间的流逝被人遗忘。Snake之前曾被美国私人情报网络Cipher致入昏迷。和Snake一起的是一个叫Ocelot的人，Ocelot是Snake的老友，当他醒后遭受攻击时救过他。
现在Snake的前搭档Kazuhira Miller被苏联在阿富汗的势力劫持。Snake必须单人执行任务去营救Miller，并向世界证明传奇雇佣老兵尚在人世间。故事的第一步将是复仇之路-Cipher，
此人杀死了Snake当年的很多战友。另外还要卷入一场”引起整个世界混乱的战斗。《合金装备：零点地带》中点燃的一切，在5里必须了结。”
                        </div>
                        <br></br>
                        <div  className={Jiecss.shi}>
                        <iframe frameborder="0" width="915" height="460" src="https://v.qq.com/iframe/player.html?vid=i0670jbe37a" allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}