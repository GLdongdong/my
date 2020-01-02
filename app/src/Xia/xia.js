
import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon, Carousel } from 'antd'
import TopOne from '../TopOne/topone';
import Header from './../Header/header';
var Xiacss = require('./xia.css');
export default class Xia extends React.Component {

    render() {
        return (

            <div className={Xiacss.xia}>
                <Header />
                <TopOne />
                <div className={Xiacss.b}>
                    <div className={Xiacss.c}>
                        <div className={Xiacss.aa}>
                            <Carousel autoplay>
                                <div><img src='./../TUPIAN/18.jpg' alt='' height="280px" width="100%"></img></div>
                                <div><img src='./../TUPIAN/25.jpg' alt='' height="280px" width="100%"></img></div>
                                <div><img src='./../TUPIAN/27.jpg' alt='' height="280px" width="100%"></img></div>
                            </Carousel>
                        </div>
                        <div className={Xiacss.aa}>
                            <Link to="/yuoxipage"> <div className={Xiacss.aa1}><Button type="primary" size="large"><Icon type="home" />游戏首页</Button> </div> </Link>
                            <Link to="/xia"> <div className={Xiacss.aa2}><Button type="primary" size="large"><Icon type="download" />游戏下载</Button> </div> </Link>
                            <Link to="/gong"> <div className={Xiacss.aa3}><Button type="primary" size="large"><Icon type="hdd" />游戏攻略 </Button> </div> </Link>
                        </div>
                        <div className={Xiacss.aa}><img src='./../TUPIAN/15.jpg' alt='' height="100%" width="100%"></img></div>
                        <hr></hr>
                        <div className={Xiacss.bb}>
                            <div className={Xiacss.bb1}> <Button icon="download" size="large" >电信下载 </Button></div>
                            <div className={Xiacss.bb1}><Button icon="download" size="large" >迅雷下载 </Button></div>
                            <div className={Xiacss.bb1}><Button icon="download" size="large" >网通下载 </Button></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
