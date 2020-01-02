import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route,Switch,Redirect,withRouter}from'react-router-dom';
import HomePage from './HomePage/homePage';
import LoginPage from './Login/login';
import BuyPage from './HomePage/Buy/buy';
import SalePage from './HomePage/Sale/sale';
import Gong from './Gong/gong';
import Gonga from './Gonga/gonga'
import Gongb from './Gongb/gongb'
import Jie from "./Jie/jie";
import Shi from "./Shi/shi";
import Tu from "./Tu/tu";
import Xia from './Xia/xia';
import Major from './Major/major';
import Register from './Register/register'
import Address from './Address/getaddress'

import Youxipage from './Youxipage/youxipage';
import Footer from './Footer/footer'

class IndexPage extends React.Component{
    render(){
        return(
            <div>
            <BrowserRouter>
            <Switch>
                <Route path="/homepage"component={HomePage} history={ this.props.history}></Route>
                <Route path="/login"component={LoginPage}></Route>
                <Route path="/register"component={Register}></Route>
                <Route path="/buy" component={BuyPage}></Route>
                <Route path="/sale" component={SalePage}></Route>
                {/* @游亮 */}
                <Route path="/yuoxipage"  component={Youxipage}></Route>
                <Route path="/gong" exact component={Gong}/>
                <Route path="/gonga" exact component={Gonga}/>
                <Route path="/gongb" exact component={Gongb}/>
                <Route path="/xia" exact component={Xia}/>
                <Route path="/jie" exact component={Jie}/>
                <Route path="/shi" exact component={Shi}/>
                <Route path="/tu" exact component={Tu}/>
                
                <Route path="/footer" component={Footer}></Route>
                <Route path="/major" component={Major}></Route>
                <Route path="/getaddress" component={Address}></Route>
                
                <Redirect to="/homepage"></Redirect>
                
            </Switch>
            </BrowserRouter>
            </div>
        )
    }
}
export default withRouter(IndexPage)
ReactDOM.render(<IndexPage />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
;serviceWorker.unregister();

