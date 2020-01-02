import React from 'react'
import { Link, NavLink } from 'react-router-dom'
var HeaderCss = require('./header.css')


export default class DefaultHeader extends React.Component {
    render() {
        return (
            <div className={HeaderCss.header}>
                <NavLink to="/homepage" className={HeaderCss.font1}>
                    <div className={HeaderCss.font1}><img src='./Images/logo3.png'height='20px' width='20px'/>LIAOJI.COM|欢迎你!</div>
                </NavLink>
                <div className={HeaderCss.div}></div>
                <NavLink to="/login" className={HeaderCss.font1}>
                <div className={HeaderCss.font1}>登录</div>
                </NavLink>
            </div>
        )
    }
} 
