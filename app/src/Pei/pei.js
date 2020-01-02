import React from 'react'
var Peicss = require('./pei.css');

export default class Pei extends React.Component {

    render() {
        return (
            <div className={Peicss.pei}>
                <div className={Peicss.a}>
                推荐配置 :<br></br>操作系统 :Windows 7/8(64位)  <br></br>
                CPU :Intel Core i7-4790 (3.60GHz) or better; Quad-core or better <br></br>内存:8GB RAB
                <br></br>显卡 :NVIDIA GeForce GTX 760 (DirectX 11 graphic card required) <br></br>
                存储空间 :28 GB available space <br></br>
                最低配置 :<br></br>操作系统 :Windows 7x64, Windows 8x64 (64-bit OS Required) <br></br>
                CPU :Intel Core i5-4460 (3.40 GHz) or better; Quad-core or better  <br></br>内存:4GB RAB
                <br></br>显卡 :Intel Core i5-4460 (3.40 GHz) or better; Quad-core or better  <br></br>
                存储空间 :28 GB available space 
                </div>
            </div>
        )
    }
}

