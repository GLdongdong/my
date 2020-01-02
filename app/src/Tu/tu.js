import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon,Carousel } from 'antd'
import Header from '../Header/header';
import TopOne from '../TopOne/topone';
var Tucss = require('./tu.css');

// function onChange(a, b, c) {
//     console.log(a, b, c);
//   }

export default class Tu extends React.Component {


    render() {
        return (
            <div className={Tucss.tu}>
                <Header/>
                <TopOne/>
                <div className={Tucss.b}>
                    <div className={Tucss.c}>
                        <div className={Tucss.aa}> 
                        <Carousel autoplay>
                           <div>  <img src='./../TUPIAN/33.jpg' alt='' height="280px" width="100%"></img> </div>
                           <div>  <img src='./../TUPIAN/32.jpg' alt='' height="280px" width="100%"></img> </div>
                           <div>  <img src='./../TUPIAN/26.jpg' alt='' height="280px" width="100%"></img> </div>
                            </Carousel>
                      </div>
                        <div className={Tucss.aa}>
                            <Link to="/yuoxipage"> <div className={Tucss.aa1}><Button type="primary" size="large"><Icon type="home" />游戏首页</Button> </div> </Link>
                            <Link to="/xia"> <div className={Tucss.aa2}><Button type="primary" size="large"><Icon type="download" />游戏下载</Button> </div> </Link>
                            <Link to="/gong"> <div className={Tucss.aa3}><Button type="primary" size="large"><Icon type="hdd" />游戏攻略 </Button> </div> </Link>
                        </div>
                        <div className={Tucss.aa}><img src='./../TUPIAN/15.jpg' alt='' height="100%" width="100%"></img></div>
                        <hr></hr>
                        <div className={Tucss.bb}>
                            <div className={Tucss.bb1}>
                                <img src='./../TUPIAN/41.jpg' height="140px" width="100%"></img>
                            </div>
                            <div className={Tucss.bb2}>
                                <div className={Tucss.bb21}> <br></br>  古墓丽影 </div>
                                <div className={Tucss.bb21}>
                                    <br></br>
                                    <Button>图片专题</Button><Button>全部图片(99+)</Button><Button>游戏壁纸(99+)</Button><Button>游戏截图(99+)</Button>
                                </div>
                            </div>
                        </div>
                        <hr></hr><br></br><br></br>
                        <div className={Tucss.cc}>
                            <div className={Tucss.cc1}>
                                <br></br>
                                高清壁纸<br></br><br></br><br></br><br></br><br></br><br></br>
                                <a><p className={Tucss.cc11}>更多<Icon type="forward" /></p></a>
                            </div>
                            <div className={Tucss.cc2}>
                                <div className={Tucss.cc21}>
                                    <div className={Tucss.cc211}>
                                        <img src="./../TUPIAN/62.jpg" width="270px"></img>
                                    </div>
                                    <div className={Tucss.cc211}>
                                        <img src="./../TUPIAN/63.jpg" width="270px"></img>
                                    </div>
                                    <div className={Tucss.cc211}>
                                        <img src="./../TUPIAN/64.jpg" width="270px"></img>
                                    </div>

                                </div>
                                <div className={Tucss.cc22}>
                                    <div className={Tucss.cc211}>
                                        <img src="./../TUPIAN/65.jpg" width="270px"></img>
                                    </div>
                                    <div className={Tucss.cc211}>
                                        <img src="./../TUPIAN/66.jpg" width="270px"></img>
                                    </div>
                                    <div className={Tucss.cc211}>
                                        <img src="./../TUPIAN/67.jpg" width="270px"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br><br></br><br></br><br></br>
                        <div className={Tucss.hh}></div>
                        <div className={Tucss.ee}>
                            <div className={Tucss.ee1}>
                                <br></br>
                                游戏截图<br></br><br></br><br></br><br></br><br></br><br></br>
                                <a><p className={Tucss.ee11}>更多<Icon type="forward" /></p></a>
                            </div>
                            <div className={Tucss.ee2}>
                                <div className={Tucss.ee21}>
                                    <div className={Tucss.ee211}>
                                        <img src="./../TUPIAN/61.jpg" width="270px" height="152px"></img>
                                    </div>
                                    <div className={Tucss.ee211}>
                                        <img src="./../TUPIAN/68.jpg" width="270px"></img>
                                    </div>
                                    <div className={Tucss.ee211}>
                                        <img src="./../TUPIAN/43.jpg" width="270px"></img>
                                    </div>
                                </div>
                                <div className={Tucss.ee22}>
                                    <div className={Tucss.ee211}>
                                        <img src="./../TUPIAN/44.jpg" width="270px"></img>
                                    </div>
                                    <div className={Tucss.ee211}>
                                        <img src="./../TUPIAN/45.jpg" width="270px"></img>
                                    </div>
                                    <div className={Tucss.ee211}>
                                        <img src="./../TUPIAN/42.jpg" width="270px"></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}