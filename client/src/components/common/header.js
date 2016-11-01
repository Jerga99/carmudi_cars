import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {path} from "path";
import LogoImg from "../../style/resources/img/logo/logo_white.png";

class Header extends Component {

    Constructor(){
        var assetPath = path.join(__dirname, ".", "public");

        console.log(assetPath);
    }

    render(){
        return (
            <header className="header__main__base">

                <div className="header__main__base__logo">
                    <img src={LogoImg} alt="carmudi"/>
                </div>

            </header>
            );
     }
}


export default (Header);