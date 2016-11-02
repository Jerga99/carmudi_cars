import React from 'react';
import {Component} from "react";
import LogoImg from "../../style/resources/img/logo/logo_white.png";

class Header extends Component {

    render(){
        const linktToLogo = `public/${LogoImg}`;
        return (
            <header className="header__main__base">

                <div className="header__main__base__logo">
                    <img src={linktToLogo} alt="carmudi"/>
                </div>

            </header>
            );
     }
}


export default (Header);