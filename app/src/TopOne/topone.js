
import React, { useCallback } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Icon } from 'antd';
var TopOneCss = require('./topone.css')

export default class TopOne extends React.Component {
    render() {
        return (

            <div className={TopOneCss.topone}>
                <div >
                    <NavLink to="/homepage" >

                        <div className={TopOneCss.zi}>
                            <div>
                                <div ><h1 className={TopOneCss.Z1}>僚机战场</h1></div>
                                <div ><h6 className={TopOneCss.Z6}>LIAOJI.COM</h6></div>
                            </div>
                        </div>

                    </NavLink>

                </div>
                <NavLink>
                    <div className={TopOneCss.guanggao} >
                        <img src="./Images/guanggao1.jpg " height="70px;" ></img>
                    </div>
                </NavLink>
                <div className={TopOneCss.topone2}>
                    <div className={TopOneCss.daohang}>
                        <div className={TopOneCss.youxi}>
                            <NavLink to="/major">
                                <div className={TopOneCss.it}>
                                    <a href="" className={TopOneCss.its}>单机游戏</a>
                                </div>
                            </NavLink>
                            <NavLink to="/major">
                                <div className={TopOneCss.it}>
                                    <a href="" className={TopOneCss.its}>网络游戏</a>
                                </div>
                            </NavLink>

                            <NavLink to="/major">
                                <div className={TopOneCss.it}>
                                    <a href="" className={TopOneCss.its}>手机游戏</a>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className={TopOneCss.daohang1}>
                        <div className={TopOneCss.youxi}>
                            <NavLink to="/major">
                                <div className={TopOneCss.it}>
                                    <a href="" className={TopOneCss.its}>国产游戏</a>
                                </div>
                            </NavLink>
                            <NavLink to="/major">
                                <div className={TopOneCss.it}>
                                    <a href="" className={TopOneCss.its}>网络游戏</a>
                                </div>
                            </NavLink>

                            <NavLink to="/major">
                                <div className={TopOneCss.it}>
                                    <a href="" className={TopOneCss.its}>硬件杀手</a>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className={TopOneCss.daohang2}>
                    <div className={TopOneCss.youxi}>
                            <NavLink to="/major">
                                <div className={TopOneCss.it}>
                                    <a href="" className={TopOneCss.its}>中文版</a>
                                </div>
                            </NavLink>
                            <NavLink to="/major">
                                <div className={TopOneCss.it}>
                                    <a href="" className={TopOneCss.its}>绿色版</a>
                                </div>
                            </NavLink>

                            <NavLink to="/major" >
                                <div className={TopOneCss.it}>
                                    <a href="" className={TopOneCss.its}>正版下载</a>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 