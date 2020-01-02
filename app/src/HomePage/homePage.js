import React from 'react';
import Header from './../Header/header';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import TopOne from './../TopOne/topone'
import Major from './../Major/major';
import HomePageCss from './../HomePage/homePage.css';
import Footer from './../Footer/footer'
export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                
                <Header />
                {/* <div>
                    <Button shape="round" type="danger" icon="forward">Button</Button>
                </div> */}
                
                    <TopOne />
                    

                <Major />
                
            </div>
        )
    }
}
