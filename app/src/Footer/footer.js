import React from "react";
var FooterCSS=require('./../Footer/footer.css');
export default class Footer extends React.Component{
    render(){
        return(
            <div  className={FooterCSS.footer}>
                <h2 className={FooterCSS.font1}>关于僚機 | 广告合作 | 人才招聘 | 意见建议 | 联系我们 | 网站地图 | 建议板 | 版权保护投诉指引 </h2>
                <h3 className={FooterCSS.font2}>CopyRight © 2019 ALi213.Net All Right Reserved 僚機 版权所有 </h3>
            </div>
        )
    }
} 