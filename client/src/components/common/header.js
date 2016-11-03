import React from 'react';
import {Component} from 'react';

class Header extends Component {

    render(){
        return (
            <header className='header__main__base'>

                <div className='header__main__base__logo'>
                    <img src='http://filipjerga.com/logo_white.png' alt='carmudi'/>
                </div>

            </header>
            );
     }
}


export default (Header);