import React from 'react'
var Ancss = require('./an.css');

export default class An extends React.Component {

    render() {
        return (
            <div className={Ancss.an}>
                <div className={Ancss.a}>
                开始游戏或者解压缩游戏时候注意关闭杀毒软件，防止误杀免DVD文件。
1. 用WINRAR软件解压缩游戏到硬盘上
2. 运行开始游戏.EXE，选择日本语<br></br>
2016年12月7日更新：
基于正式版完整游戏制作，整合1.10升级档+玩家自提取PS3官方中文完美汉化补丁+CPY完美免DVD补丁，繁体中文语言，解压缩即可玩。
------------------------------------------------------------------------------------------------------------------
2016年12月7日09点之前下载游戏的玩家，安装完美汉化补丁即可，无需重新下载游戏。(下载地址：http://patch.ali213.net/showpatch/64365.html)
------------------------------------------------------------------------------------------------------------------
                </div>
            </div>
        )
    }
}

