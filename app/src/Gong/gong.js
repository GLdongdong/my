import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom'
import { Button, Icon, Row, Col, Carousel } from 'antd'
import Quan from './../Quan/quan'
import Header from './../Header/header' 
import TopOne from './../TopOne/topone' 
var Gongcss = require('./gong.css');

export default class Gong extends React.Component {

    render() {
        return (
            <div className={Gongcss.gong}>
               <Header />
                <TopOne />
                <div className={Gongcss.b}>
                    <div className={Gongcss.c}>
                        <div className={Gongcss.aa}>
                        <Carousel autoplay>
                        <div><img src='./../TUPIAN/21.jpg' alt='' height="280px" width="100%"></img></div>                    
                        <div><img src='./../TUPIAN/27.jpg' alt='' height="280px" width="100%"></img></div>                    
                        <div><img src='./../TUPIAN/26.jpg' alt='' height="280px" width="100%"></img></div>                    
                       </Carousel>
                        </div>
                        <div className={Gongcss.aa}>
                            <Link to="/yuoxipage"> <div className={Gongcss.aa1}><Button type="primary" size="large"><Icon type="home" />游戏首页</Button> </div> </Link>
                            <Link to="/xia"> <div className={Gongcss.aa2}><Button type="primary" size="large"><Icon type="download" />游戏下载</Button> </div> </Link>
                            <Link to="/gong"> <div className={Gongcss.aa3}><Button type="primary" size="large"><Icon type="hdd" />游戏攻略 </Button> </div> </Link>
                        </div>
                        <div className={Gongcss.aa}><img src='./../TUPIAN/15.jpg' alt='' height="100%" width="100%"></img></div>
                        <hr></hr>
                        <div className={Gongcss.bb}>
                            <div className={Gongcss.bb1}>
                                <img src='./../TUPIAN/41.jpg' height="140px" width="100%"></img>
                            </div>
                            <div className={Gongcss.bb2}>
                                <div className={Gongcss.bb21}> <br></br>  八方旅人攻略专题 </div>
                                <div className={Gongcss.bb21}>
                                    <br></br>
                                    <Button>攻略专题</Button><Button>流程攻略</Button><Button>游戏资料</Button><Button>游戏秘籍</Button><Button>成就/奖杯</Button>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className={Gongcss.cc}>
                            <div className={Gongcss.cc1}></div >
                            <div className={Gongcss.cc2}>精品攻略推荐</div>
                        </div>
                        <div className={Gongcss.dd}>
                            <div className={Gongcss.dd1}>
                                <div className={Gongcss.dd11}><img src="./../TUPIAN/42.jpg" width="100%" height="120px"></img></div >
                                <div className={Gongcss.dd12}><a>《八方旅人》全禁忌武器入手攻略</a></div >
                            </div >
                            <div className={Gongcss.dd1}>
                                <div className={Gongcss.dd11}><img src="./../TUPIAN/43.jpg" width="100%" height="120px"></img></div >
                                <div className={Gongcss.dd12}><a>《八方旅人》学者开局通关视频攻略</a></div >
                            </div >
                            <div className={Gongcss.dd1}>
                                <div className={Gongcss.dd11}><img src="./../TUPIAN/44.jpg" width="100%" height="120px"></img></div >
                                <div className={Gongcss.dd12}><a>《八方旅人》全特殊对话触发条件详解</a> </div >
                            </div >
                            <div className={Gongcss.dd1}>
                                <div className={Gongcss.dd11}><img src="./../TUPIAN/45.jpg" width="100%" height="120px"></img></div >
                                <div className={Gongcss.dd12}><a>《八方旅人》 怎么触发队伍对话</a></div >
                            </div >
                        </div>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><hr></hr>
                        <div className={Gongcss.cc}>
                            <div className={Gongcss.cc1}></div >
                            <div className={Gongcss.cc2}>攻略合集</div>
                        </div>
                        <br></br>
                        <div className={Gongcss.ee}>
                            <Button>流程图文攻略</Button><Button>通关视频攻略</Button><Button>支线任务攻略</Button>
                        </div>
                        <br></br>
                        <div className={Gongcss.ff}>
                            <div className={Gongcss.ff1}>第一章</div><br></br>
                            <a> <div className={Gongcss.ff2}>
                                <Row>
                                    <Col span={4}>。学者</Col>
                                    <Col span={4}>。神官</Col>
                                    <Col span={4}>。商人</Col>
                                    <Col span={4}>。剑士</Col>
                                    <Col span={4}>。舞者</Col>
                                    <Col span={4}>。药师</Col>
                                </Row><br></br>
                                <Row>
                                    <Col span={4}>。盗贼</Col>
                                    <Col span={4}>。猎人</Col>
                                    <Col span={4}></Col>
                                    <Col span={4}></Col>
                                    <Col span={4}></Col>
                                    <Col span={4}></Col>
                                </Row>
                            </div></a>
                            <div className={Gongcss.ff1}>第二章</div><br></br>
                            <a><div className={Gongcss.ff2}>
                                <Row>
                                    <Col span={4}>。学者</Col>
                                    <Col span={4}>。神官</Col>
                                    <Col span={4}>。商人</Col>
                                    <Col span={4}>。剑士</Col>
                                    <Col span={4}>。舞者</Col>
                                    <Col span={4}>。药师</Col>
                                </Row><br></br>
                                <Row>
                                    <Col span={4}>。盗贼</Col>
                                    <Col span={4}>。猎人</Col>
                                    <Col span={4}></Col>
                                    <Col span={4}></Col>
                                    <Col span={4}></Col>
                                    <Col span={4}></Col>
                                </Row>
                            </div></a>
                            <div className={Gongcss.ff1}>隐藏职业</div><br></br>
                            <a><div className={Gongcss.ff2}>
                                <Row>
                                    <Col span={4}>。魔大公</Col>
                                    <Col span={4}>。魔剑士</Col>
                                    <Col span={4}>。星咏者</Col>
                                    <Col span={4}>。豪武将</Col>
                                    <Col span={4}>。舞者</Col>
                                    <Col span={4}>。药师</Col>
                                </Row>
                            </div></a><br></br>
                            <BrowserRouter basename="gong">
                                <Link to="/quan"><div className={Gongcss.ff1}><button><Icon type="down" />展示全部</button></div><br></br></Link>
                                <Route path="/quan" exact component={Quan} />
                            </BrowserRouter>
                        </div>
                        <hr></hr>
                        <div className={Gongcss.cc}>
                            <div className={Gongcss.cc1}></div >
                            <div className={Gongcss.cc2}>新手指南</div>
                        </div>
                        <a><div className={Gongcss.hh}>
                            <Row>
                                <Col span={6}>新手境界攻略</Col>
                                <Col span={6}>高清大地图</Col>
                                <Col span={6}>武器推荐</Col>
                                <Col span={6}>弱点分析</Col>
                            </Row><br></br>
                            <Row>
                                <Col span={6}>药品效果</Col>
                                <Col span={6}>人物属性作用</Col>
                                <Col span={6}>各类状态效果</Col>
                                <Col span={6}></Col>
                            </Row>
                        </div></a>
                        <hr></hr>
                        <div className={Gongcss.cc}>
                            <div className={Gongcss.cc1}></div >
                            <div className={Gongcss.cc2}>职业相关</div>
                        </div>
                        <a> <div className={Gongcss.hh}>
                            <Row>
                                <Col span={6}>开局职业选择</Col>
                                <Col span={6}>队伍搭配</Col>
                                <Col span={6}>食堂位置</Col>
                                <Col span={6}>隐藏Boss打法</Col>
                            </Row><br></br>
                            <Row>
                                <Col span={6}>隐藏职业介绍</Col>
                                <Col span={6}>职业优缺点分析</Col>
                                <Col span={6}></Col>
                                <Col span={6}></Col>
                            </Row>
                        </div></a>
                        <hr></hr>
                        <div className={Gongcss.cc}>
                            <div className={Gongcss.cc1}></div >
                            <div className={Gongcss.cc2}>技能介绍</div>
                        </div>
                        <a><div className={Gongcss.hh}>
                            <Row>
                                <Col span={6}>基础技能介绍</Col>
                                <Col span={6}>隐藏职业介绍</Col>
                                <Col span={6}>辅助技能</Col>
                                <Col span={6}>地图指令</Col>
                            </Row><br></br>
                            <Row>
                                <Col span={6}>药师调和效果</Col>
                                <Col span={6}>百思不解之舞</Col>
                                <Col span={6}></Col>
                                <Col span={6}></Col>
                            </Row>
                        </div></a>
                        <hr></hr>
                        <div className={Gongcss.cc}>
                            <div className={Gongcss.cc1}></div >
                            <div className={Gongcss.cc2}>Boss攻略</div>
                        </div>
                        <a><div className={Gongcss.hh}>
                            <Row>
                                <Col span={6}>最终Boss触发方法</Col>
                                <Col span={6}>最终Boss触发打法视频</Col>
                                <Col span={6}>流沙洞窟大蛇</Col>
                                <Col span={6}>地下墓地Boss</Col>
                            </Row><br></br>
                            <Row>
                                <Col span={6}>食人花</Col>
                                <Col span={6}>狼王</Col>
                                <Col span={6}></Col>
                                <Col span={6}></Col>
                            </Row>
                        </div></a>
                        <hr></hr>
                        <div className={Gongcss.cc}>
                            <div className={Gongcss.cc1}></div >
                            <div className={Gongcss.cc2}>刷经验与JP</div>
                        </div>
                        <a> <div className={Gongcss.hh}>
                            <Row>
                                <Col span={6}>前期</Col>
                                <Col span={6}>中后期</Col>
                                <Col span={6}>跳舞技巧</Col>
                                <Col span={6}>刷猫位置</Col>
                            </Row>
                        </div></a>
                        <hr></hr>
                        <div className={Gongcss.cc}>
                            <div className={Gongcss.cc1}></div >
                            <div className={Gongcss.cc2}>人物资料与剧情</div>
                        </div>
                        <div className={Gongcss.hh}>
                            <Row>
                                <Col span={3}><img src="./../TUPIAN/51.jpg" width="80%" height="140px"></img></Col>
                                <Col span={3}><img src="./../TUPIAN/52.jpg" width="80%" height="140px"></img></Col>
                                <Col span={3}><img src="./../TUPIAN/53.jpg" width="80%" height="140px"></img></Col>
                                <Col span={3}><img src="./../TUPIAN/54.jpg" width="80%" height="140px"></img></Col>
                                <Col span={3}><img src="./../TUPIAN/55.jpg" width="80%" height="140px"></img></Col>
                                <Col span={3}><img src="./../TUPIAN/56.jpg" width="80%" height="140px"></img></Col>
                                <Col span={3}><img src="./../TUPIAN/57.jpg" width="80%" height="140px"></img></Col>
                                <Col span={3}><img src="./../TUPIAN/58.jpg" width="80%" height="140px"></img></Col>
                            </Row><br></br>
                            <a> <div className={Gongcss.hh2}>
                                <Row>
                                    <Col span={3}>学者</Col>
                                    <Col span={3}>剑士</Col>
                                    <Col span={3}>神官</Col>
                                    <Col span={3}>盗贼</Col>
                                    <Col span={3}>商人</Col>
                                    <Col span={3}>药师</Col>
                                    <Col span={3}>猎人</Col>
                                    <Col span={3}>舞娘</Col>
                                </Row>
                            </div></a>
                        </div>
                        <hr></hr>
                        <div className={Gongcss.cc}>
                            <div className={Gongcss.cc1}></div >
                            <div className={Gongcss.cc2}>最近更新</div>
                        </div>
                        <a> <div>
                            <br></br>
                            <div className={Gongcss.hh}>
                                。攻略 | 《八方旅人》 名手之枪入手攻略
                            </div><br></br>
                            <div className={Gongcss.hh}>
                                。攻略 | 《八方旅人》 人物剧情与关系
                            </div><br></br>
                            <div className={Gongcss.hh}>
                                。攻略 | 《八方旅人》 前期武器好用获取攻略
                            </div><br></br>
                            <div className={Gongcss.hh}>
                                。攻略 | 《八方旅人》 提升盗贼偷取率成功的方法
                            </div><br></br>
                            <div className={Gongcss.hh}>
                                。攻略 | 《八方旅人》 捕获成功率提升的方法
                            </div><br></br>
                            <div className={Gongcss.hh}>
                                。攻略 | 《八方旅人》 最终Boss打法攻略全人物中文赏析
                            </div><br></br>
                            <div className={Gongcss.hh}>
                                。攻略 | 《八方旅人》 前期武器位置
                            </div><br></br>
                            <div className={Gongcss.hh}>
                                。攻略 | 《八方旅人》 隐藏职业辅助技能推荐
                            </div><br></br>
                            <div className={Gongcss.hh}>
                                。攻略 | 《八方旅人》 难点成就达成攻略
                            </div><br></br>
                            <div className={Gongcss.hh}>
                                。攻略 | 《八方旅人》 禁忌武器入手攻略
                            </div><br></br>
                        </div></a>


                    </div>
                </div>
            </div>
        )
    }
}