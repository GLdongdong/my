import { Tabs, Icon, Pagination } from 'antd';
// import {TabPane, Tabs,key,callback,Icon} from 'antd';


// import Youxipage from './../Youxipage/youxipage';
import React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import Footer from '../Footer/footer';
var MajorCss = require('./major.css');
const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}

export default class Major extends React.Component {
    render() {
        return (
            
            // <BrowserRouter basename='/homePage'>
            <div className={MajorCss.major}>
                <div className={MajorCss.major1} >

                    <Tabs onChange={callback} type="card" size='large' >
                        <TabPane tab="热门游戏" key="1" >
                            <div className={MajorCss.images}>
                               
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images1.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images3.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images4.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images5.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images6.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images1.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                            <div className={MajorCss.liebiao}>
                                <div className={MajorCss.Lie}>
                                    <div className={MajorCss.Lie1}>
                                        <div className={MajorCss.P}>
                                            <p>网络游戏：</p>
                                        </div>
                                        <div className={MajorCss.Pone}>
                                            <NavLink className={MajorCss.Pone1} to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1} to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1} to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1} to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1} to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1} to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>

                                        </div>
                                    </div>
                                </div>
                                <div className={MajorCss.Lie}>
                                    <div className={MajorCss.Lie1}>
                                        <div className={MajorCss.P}>
                                            <p>Date系列：</p>
                                        </div>
                                        <div className={MajorCss.Pone}>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>

                                        </div>
                                    </div>
                                </div>
                                <div className={MajorCss.Lie}>
                                    <div className={MajorCss.Lie1}>
                                        <div className={MajorCss.P}>
                                            <p>射击游戏：</p>
                                        </div>
                                        <div className={MajorCss.Pone}>
                                            <NavLink className={MajorCss.Pone1}>
                                                <div className={MajorCss.Pone2}to="/yuoxipage">文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>

                                        </div>
                                    </div>
                                </div>
                                <div className={MajorCss.Lie}>
                                    <div className={MajorCss.Lie1}>
                                        <div className={MajorCss.P}>
                                            <p>MINI游戏：</p>
                                        </div>
                                        <div className={MajorCss.Pone}>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>

                                        </div>
                                    </div>
                                </div>
                                <div className={MajorCss.Lie}>
                                    <div className={MajorCss.Lie1}>
                                        <div className={MajorCss.P}>
                                            <p>单机游戏：</p>
                                        </div>
                                        <div className={MajorCss.Pone}>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2}>文明</div>
                                            </NavLink>
                                            <NavLink className={MajorCss.Pone1}to="/yuoxipage">
                                                <div className={MajorCss.Pone2} >文明</div>
                                            </NavLink>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <NavLink >
                                <div className={MajorCss.GGao}>
                                    <div className={MajorCss.Pone3}>
                                        <img src="./Images/guanggao.jpg" height="100%" width="100%"></img>
                                    </div>
                                </div>
                            </NavLink>
                        </TabPane>
                        <TabPane tab="战争" key="2" >
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images4.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>

                                </NavLink>
                            </div>
                            <NavLink to="/buy">我买</NavLink>
                        </TabPane>
                        <TabPane tab="恐怖" key="3">
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images3.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>

                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images6.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to="gamepage">游戏</NavLink>
                        </TabPane>
                        <TabPane tab="僵尸" key="4" >
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images5.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to="/sale">我要</NavLink>
                        </TabPane>
                        <TabPane tab="沙盒" key="5" >
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images4.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink><NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images2.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to="/buy">我买</NavLink>

                        </TabPane>
                        <TabPane tab="休闲" key="6">
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images4.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                                <NavLink to="gamepage">游戏</NavLink>
                            </div>
                        </TabPane>
                        <TabPane tab="FPS" key="7" >
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images1.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to="/sale">我要</NavLink>
                        </TabPane>
                        <TabPane tab="国产游戏" key="8" >
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images2.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to="/buy">我买</NavLink>
                        </TabPane>
                        <TabPane tab="独立游戏" key="9">
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images4.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to="gamepage">游戏</NavLink>
                        </TabPane>
                        <TabPane tab="英雄联盟" key="10" >
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images6.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to="/sale">我要</NavLink>
                        </TabPane>
                        <TabPane tab="射击" key="11" >
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images1.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to="/buy">我买</NavLink>
                        </TabPane>
                        <TabPane tab="APEX" key="12">
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images4.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink><NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images3.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to="gamepage">游戏</NavLink>
                        </TabPane><TabPane tab="守望先锋" key="13" >
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images2.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink><NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images4.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to="/sale">我要</NavLink>
                        </TabPane>
                        <TabPane tab="Data系列" key="14" >
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images6.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink><NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images1.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to="/buy">我买</NavLink>
                        </TabPane>
                        <TabPane tab="外挂" key="15">
                            <div className={MajorCss.images}>
                                <NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images2.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink><NavLink to="/yuoxipage">
                                    <div className={MajorCss.buju}>
                                        <a href="#">
                                            <div className={MajorCss.img}><img src='./Images/images4.jpg' height='80px' width='160px' border="0" alt="img" /></div>
                                            <div className={MajorCss.info}>
                                                <h2 className={MajorCss.font}>超级罗马帝国</h2>
                                                <h4 className={MajorCss.font1}>刀起刀落  生死一战</h4>
                                            </div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to="gamepage">游戏</NavLink>
                        </TabPane>
                    </Tabs>
                    <div className={MajorCss.biaoqian1}>
                        <Tabs defaultActiveKey="1">
                            <TabPane
                                tab={
                                    <span>
                                        <Icon type="loading" />
                                        最新
                                   </span>
                                }
                                key="1"
                            >
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G1.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G2.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G3.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G4.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G5.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G6.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G7.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G8.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G9.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G10.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G11.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G12.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G13.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G14.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G15.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G16.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink >

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G17.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G18.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G19.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G20.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G21.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G22.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G23.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G24.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G25.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G26.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G27.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G28.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G29.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to="/yuoxipage">
                                        <div className={MajorCss.buju1}>
                                            <a href="#">
                                                <div className={MajorCss.img1}><img src='./Images/G30.jpg' border="0" alt="img" /></div>
                                                <div className={MajorCss.info1}>
                                                    <h2 className={MajorCss.font0}>时间：2019-06-14</h2>
                                                    <h4 className={MajorCss.font2}>大小：77.2M</h4>
                                                    <div>
                                                        <div className={MajorCss.get1}>单人单机</div>
                                                        <div className={MajorCss.get2}>3D画面</div>
                                                        <div className={MajorCss.get3}>支持手柄</div>
                                                        <div className={MajorCss.get4}>菜鸟入门</div>
                                                        <div className={MajorCss.get5}>射击</div>
                                                        <div className={MajorCss.get6}>动作</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <NavLink to="/yuoxipage">
                                                <h4 className={MajorCss.font5}>独立游戏3D</h4>
                                                <div >
                                                    <h4 className={MajorCss.font3}>其他版本</h4>
                                                    <NavLink to="/yuoxipage">
                                                        <h4 className={MajorCss.font4}>下载(77.4M)</h4>
                                                    </NavLink>

                                                </div>
                                            </NavLink>
                                        </div>

                                    </NavLink>

                                </div>

                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <Icon type="fire" />
                                        人气
                                    </span>
                                }
                                key="2"
                            >
                                Tab 2
                            </TabPane>
                        </Tabs>

                        <div className={MajorCss.yema}>
                            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                            <br />
                        </div>
                        <Footer />
                    </div>
                </div>
                
            </div>
            
            // </BrowserRouter>
        )
    }
}

