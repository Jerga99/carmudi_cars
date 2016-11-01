import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import Logo from "../../style/resources/img/logo/logo_black.png";

class Footer extends Component {

    render(){
        return (
            <footer className="footer__main__base">
                <div className="footer__main__base__container">
                    <div className="footer__main__base__logo">
                        <img src={Logo} alt="logo"/>
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