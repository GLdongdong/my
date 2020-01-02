import React from 'react'
import { Row,Col} from 'antd'
var Quancss = require('./quan.css');

export default class Quan extends React.Component {

    render() {
        return (
            <div className={Quancss.quan}>
                <div className={Quancss.ff}>
                    <br></br>
                    <div className={Quancss.ff1}>第三章</div><br></br>
                    <a><div className={Quancss.ff2}>
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
                        <div className={Quancss.ff1}>第四章</div><br></br>
                        <a><div className={Quancss.ff2}>
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
                        <div className={Quancss.ff1}>最终章</div><br></br>
                        <a><div className={Quancss.ff2}>
                            <Row>
                                <Col span={4}>。8连Boss战</Col>
                                <Col span={4}>。最终Boss</Col>
                                <Col span={4}></Col>
                                <Col span={4}></Col>
                                <Col span={4}></Col>
                                <Col span={4}></Col>
                            </Row>
                        </div></a>
                                      
                </div>
            </div>
        )
    }
}

