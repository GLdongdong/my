import React from 'react'
import Item from 'antd/lib/list/Item'
import { Card } from 'antd';

var AddressCss = require('./address.css')
const { Meta } = Card;
export default class An extends React.Component {
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
    render(){
        const{news}=this.state;
        console.log(Item.address)
        return(
            <div className={AddressCss.b}>
              {  news.map((Item,index)=>(
                  <Card
                  hoverable
                  style={{ width: 380 }}
                  cover={<img alt="example" src="./../TUPIAN/16.jpg" />}
                >
                  <Meta title={Item.address} description="游戏网站（粘粘复制链接，百度搜索即可）" />
                  
                </Card>
                
                ))}
    
            </div>
        )
    }
}