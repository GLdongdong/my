import React from 'react'
import { Card } from 'antd';
import Item from 'antd/lib/list/Item'

var XinCss =require("./xin.css")
const { Meta } = Card;
export default class Gai extends React.Component {
    constructor(props){
        super(props);
        this.state={
            news:[{
                strategy:""
            }]
        }
    }
    componentDidMount(){
        var that =this;
        fetch("/games/getStrategy")
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
        console.log(Item.strategy)
        return(
            <div className={XinCss.b}>
                {  news.map((Item,index)=>(
                  <Card style={{ width: 1080 }}>
                        <p>{Item.strategy}</p>
                </Card>
                
                ))}
    
            </div>
        )
    }
}

