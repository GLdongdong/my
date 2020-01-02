import React from 'react'
import { Card } from 'antd';
import Item from 'antd/lib/list/Item'

var GaiCss =require("./gai.css")
const { Meta } = Card;
export default class Gai extends React.Component {
    constructor(props){
        super(props);
        this.state={
            news:[{
                summary:""
            }]
        }
    }
    componentDidMount(){
        var that =this;
        fetch("/games/getSummary")
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
        console.log(Item.summary)
        return(
            <div className={GaiCss.b}>
                {  news.map((Item,index)=>(
                  <Card style={{ width: 1080 }}>
                        <p>{Item.summary}</p>
                </Card>
                
                ))}
    
            </div>
        )
    }
}

