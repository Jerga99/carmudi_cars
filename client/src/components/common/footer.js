import React from 'react';
import {Component} from "react";
import LogoImg from "../../style/resources/img/logo/logo_black.png";

class Footer extends Component {


    render(){
        const linktToLogo = `public/${LogoImg}`;
        return (
            <footer className="footer__main__base">
                <div className="footer__main__base__container">
                    <div className="footer__main__base__logo">
                        <img src={linktToLogo} alt="logo"/>
                    </div>
                    <div className="footer__main__base__copyright">
                        <p>&copy; 2016 by Carmudi Philippines, Inc.</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;