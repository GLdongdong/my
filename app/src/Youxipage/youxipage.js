import React from 'react';
import { Link, NavLink, BrowserRouter, Route ,link} from 'react-router-dom'
import $ from  'jquery'
import { Button, Icon,notification,Divider, Carousel,Card } from 'antd'
// eslint-disable-next-line{/* <Button type="primary" shape="round"></Button> */}
import Gai from './../Gai/gai'
import Pei from './../Pei/pei'
import An from './../An/an'
import Xin from './../Xin/xin'
import Header from './../Header/header';
import TopOne from './../TopOne/topone';
import { previewImage } from 'antd/lib/upload/utils';
import Item from 'antd/lib/list/Item';

var YouxipageCss = require('./youxipage.css');
const { Meta } = Card;
export default class Youxipage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            news:[{
                address:""
            }]
        }
    }
    componentDidMount(){
        var that =this;
        fetch("/games/getAddress")
        .then(function (res){
            console.log(res);
            return res.json();
        })
        .then(function (data){
            console.log(data);
            that.setState({news:data})
        })
    }
    // changeValue=(e)=>{
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }
    // upload = ()=>{
    //     var data={
    //         "address":this.state.address
    //     }
    //     fetch("/games/getAddress",{
    //         method:"post",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify(data)
    //     }).then(response=>response.json())
    //     console.log(Item.adress)
    // }
    render() {
        const {news} = this.state;
        const openNotification = () => {
            notification.open({
              message: 'Notification Title',
              description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
              onClick: () => {
                console.log('Notification Clicked!');
              },
            });
          };
        return (
            <div className={YouxipageCss.youxipage}>
                <Header />
                <TopOne />
                <div className={YouxipageCss.b}>
                    <div className={YouxipageCss.c}>
                        <div className={YouxipageCss.aa}>
                            <Carousel autoplay>
                                <div>  <img src='./../TUPIAN/20.jpg' alt='' height="255px" width="100%"></img> </div>
                                <div>  <img src='./../TUPIAN/32.jpg' alt='' height="255px" width="100%"></img> </div>
                                <div>  <img src='./../TUPIAN/33.jpg' alt='' height="255px" width="100%"></img> </div>
                            </Carousel>
                        </div>
                        <div className={YouxipageCss.bb}>
                            <Link to="/homepage"> <div className={YouxipageCss.bb1}><Button type="primary" size="large"><Icon type="home" />首页 </Button></div> </Link>
                            <NavLink to="/xia"> <div className={YouxipageCss.bb2}><Button type="primary" size="large"><Icon type="download" />游戏下载 </Button></div> </NavLink>
                            <Link to="/gong"> <div className={YouxipageCss.bb3}><Button type="primary" size="large"><Icon type="hdd" />游戏攻略 </Button> </div> </Link>
                            <Link to="/jie"><div className={YouxipageCss.bb4}><Button type="primary" size="large"><Icon type="profile" />游戏介绍</Button></div></Link>
                            <Link to="/shi"><div className={YouxipageCss.bb5}><Button type="primary" size="large"><Icon type="video-camera" />游戏视频</Button></div></Link>
                            <Link to="/tu"><div className={YouxipageCss.bb6}><Button type="primary" size="large"><Icon type="wallet" />游戏图库</Button></div></Link>
                        </div>
                        
                        <div className={YouxipageCss.cc}><img src='./../TUPIAN/15.jpg' alt='' height="100%" width="100%"></img></div>
                        <hr></hr>
                        <div className={YouxipageCss.dd}>游戏首页</div>
                        <div className={YouxipageCss.ee}>
                            <div className={YouxipageCss.ee1}><img src='./../TUPIAN/16.jpg' alt='' height="240px" width="190px"></img></div>
                            <div className={YouxipageCss.ee2}>
                                <div className={YouxipageCss.ee21}>刺客信条：幻痛 免安装简体中文绿色版<br></br><br></br>
                                    游戏类型：动作游戏ACT 更新时间：2016-12-7 游戏发行：Konami<br></br><br></br>游戏标签：单人单机、3D画面、冒险、射击、科幻 <br></br><br></br>
                                </div>
                                <div className={YouxipageCss.ee22}>
                                    <div className={YouxipageCss.ee221}> <Link to="./getaddress"><Button icon="download" size="large" >电信下载 </Button></Link></div>
                                    <div className={YouxipageCss.ee222}><Link to="./getaddress"><Button icon="download" size="large" onClick={this.upload}>迅雷下载 </Button></Link></div>
                                    <div className={YouxipageCss.ee223}><Link to="./getaddress"><Button icon="download" size="large" >网通下载 </Button></Link></div>
                                   
                                </div>
                            </div>

                        </div>
                        <hr></hr>
                        <BrowserRouter basename="youxipage">
                            <div className={YouxipageCss.hh}><Link to="/gai"><Button size="large"><Icon type="unordered-list" />游戏概述</Button></Link>
                                <Link to="/pei"><Button size="large"><Icon type="windows" />配置要求</Button></Link><a href="http://localhost:8080/posters/1577892857650web2.jpg" target="_blank"><Button size="large" icon="download">游戏截图</Button></a>
                                <Link to="/xin"><Button size="large"><Icon type="zhihu" />新闻攻略</Button></Link></div>
                            <Route path="/gai" exact component={Gai} />
                            <Route path="/pei" exact component={Pei} />
                            <Route path="/an" exact component={An} />
                            <Route path="/xin" exact component={Xin} />
                        </BrowserRouter>
                        <hr></hr>
                        <div className={YouxipageCss.ff}>游戏截图</div>
                        <div className={YouxipageCss.gg}>
                            <Carousel autoplay>
                                <div className={YouxipageCss.gg1}><img src='./../TUPIAN/30.jpg' alt='' height="280px" width="100%"></img></div>
                                <div className={YouxipageCss.gg1}><img src='./../TUPIAN/31.jpg' alt='' height="280px" width="100%"></img></div>
                                <div className={YouxipageCss.gg1}><img src='./../TUPIAN/32.jpg' alt='' height="280px" width="100%"></img></div>
                                <div className={YouxipageCss.gg1}><img src='./../TUPIAN/33.jpg' alt='' height="280px" width="100%"></img></div>
                            </Carousel>
                        </div>
                        <hr></hr>
                        <div className={YouxipageCss.ff}>游戏概述</div>
                        <div className={YouxipageCss.ff1}>
                            作为潜行谍战类游戏的鼻祖，《刺客信条：幻痛》以架空背景下的全球冷战为题材，且采用开放世界设定
，玩家可以自由选择潜入的路径、攻略的方式和脱逃的路线，使得游戏更多元化。游戏拥有写实的画面风格和紧张刺激的游玩体验，旨在提供一流的代入感
。同时采用FOX引擎制作在游戏画面上有相当不俗的表现。
                                     官方故事梗概：“苏联入侵阿富汗令美苏冷战更加恶化。在1984年，一名独眼，带有一支假臂的男子来到了这个国家。知道他的人称他为Snake。
之前的身份是一名传奇雇佣兵，随着时间的流逝被人遗忘。Snake之前曾被美国私人情报网络Cipher致入昏迷。和Snake一起的是一个叫Ocelot的人，Ocelot是Snake的老友，当他醒后遭受攻击时救过他。
现在Snake的前搭档Kazuhira Miller被苏联在阿富汗的势力劫持。Snake必须单人执行任务去营救Miller，并向世界证明传奇雇佣老兵尚在人世间。故事的第一步将是复仇之路-Cipher，
此人杀死了Snake当年的很多战友。另外还要卷入一场”引起整个世界混乱的战斗。《合金装备：零点地带》中点燃的一切，在5里必须了结。”
                        </div>
                        <hr></hr>
                        <div className={YouxipageCss.ff}>游戏配置</div>
                        <div className={YouxipageCss.ff1}>
                            推荐配置 :<br></br>操作系统 :Windows 7/8(64位)  <br></br>
                            CPU :Intel Core i7-4790 (3.60GHz) or better; Quad-core or better <br></br>内存:8GB RAB
                <br></br>显卡 :NVIDIA GeForce GTX 760 (DirectX 11 graphic card required) <br></br>
                            存储空间 :28 GB available space <br></br>
                            最低配置 :<br></br>操作系统 :Windows 7x64, Windows 8x64 (64-bit OS Required) <br></br>
                            CPU :Intel Core i5-4460 (3.40 GHz) or better; Quad-core or better  <br></br>内存:4GB RAB
                <br></br>显卡 :Intel Core i5-4460 (3.40 GHz) or better; Quad-core or better  <br></br>
                            存储空间 :28 GB available space
                        </div>
                        <hr></hr>
                        <div className={YouxipageCss.ff}>安装说明</div>
                        <div className={YouxipageCss.ff1}>
                            开始游戏或者解压缩游戏时候注意关闭杀毒软件，防止误杀免DVD文件。
1. 用WINRAR软件解压缩游戏到硬盘上
2. 运行开始游戏.EXE，选择日本语<br></br>
                            2016年12月7日更新：
                            基于正式版完整游戏制作，整合1.10升级档+玩家自提取PS3官方中文完美汉化补丁+CPY完美免DVD补丁，繁体中文语言，解压缩即可玩。
                            ------------------------------------------------------------------------------------------------------------------
                            2016年12月7日09点之前下载游戏的玩家，安装完美汉化补丁即可，无需重新下载游戏。(下载地址：http://patch.ali213.net/showpatch/64365.html)
                            ------------------------------------------------------------------------------------------------------------------
                        </div>
                        <hr></hr>
                        <div className={YouxipageCss.ff}>新闻攻略</div>
                        <div className={YouxipageCss.ff1}>

                            相关资讯 :<a><br></br>PS4版《合金装备5：幻痛》迎来“无核世界”隐藏结局<br></br>
                                ROH摔角联赛选手COS《合金装备5》蛇叔精彩登场移不开目光！<br></br>
                                俄罗斯美女Cos《合金装备5》静静美图<br></br>《合金装备5》人物MOD发布 来自合金装备3的Ocelot
                <br></br>游戏中那些性感美艳的脸模明星 <br></br>有尤物还有小鲜肉！<br></br>
                                《合金装备5》今日推出重磅更新 静静成为可操控角色
                <br></br>《合金装备5：幻痛》无核世界隐藏结局是什么 无核结局怎么触发<br></br>
                                《合金装备5：幻痛》全S评价拿雷电技巧心得<br></br>《合金装备5：幻痛》FOB全迷彩类物品介绍
                <br></br>《合金装备5：幻痛》9年前失踪士兵抓捕方法<br></br>《合金装备5：幻痛》直升机盘点 直升机有哪些
                <br></br>《合金装备5：幻痛》豪麻位置说明 豪麻在哪？</a>
                        </div>
                        <div className={YouxipageCss.bb}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}




