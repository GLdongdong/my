import React from 'react';
import { Link } from 'react-router-dom'
var Gongacss = require('./gonga.css');

export default class Gonga extends React.Component{

    render(){
        return(
            <div className={Gongacss.gonga}>
                <div className={Gongacss.a}>僚机<br></br>www.liaoji.com</div>
                    <div className={Gongacss.b}>  
                        <div className={Gongacss.c}>
                            <div className={Gongacss.aa}>
                            <Link to="/yuoxipage"> <div className={Gongacss.aa1}>首页 </div> </Link>
                            <Link to="/xia"> <div className={Gongacss.aa2}>下载</div> </Link>
                            <Link to="/gong"> <div className={Gongacss.aa3}>攻略 </div> </Link>
                            </div>
                            <Link to="/gonga"><div className={Gongacss.bb}>攻略视频讲解</div> </Link>
                            <Link to="/gongb"><div className={Gongacss.cc}>攻略图片讲解</div></Link>
                        </div>
                    </div>
            </div>
        )
    }
}