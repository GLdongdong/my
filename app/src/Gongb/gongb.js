import React from 'react';
import { Link } from 'react-router-dom'
var Gongbcss = require('./gongb.css');

export default class Gongb extends React.Component{

    render(){
        return(
            <div className={Gongbcss.gonga}>
                <div className={Gongbcss.a}>僚机<br></br>www.liaoji.com</div>
                    <div className={Gongbcss.b}>  
                        <div className={Gongbcss.c}>
                            <div className={Gongbcss.aa}>
                            <Link to="/yuoxipage"> <div className={Gongbcss.aa1}>首页 </div> </Link>
                            <Link to="/xia"> <div className={Gongbcss.aa2}>下载</div> </Link>
                            <Link to="/gong"> <div className={Gongbcss.aa3}>攻略 </div> </Link>
                            </div>
                            <Link to="/gonga"><div className={Gongbcss.bb}>攻略视频讲解</div> </Link>
                            <Link to="/gongb"><div className={Gongbcss.cc}>攻略图片讲解</div></Link>
                        </div>
                    </div>
            </div>
        )
    }
}