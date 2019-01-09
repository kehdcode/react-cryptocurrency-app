import React from 'react';
//import ReactDom from 'react-dom';
import logo from '../logo.png';
import './header.css';

const Header = () => {
    
        return (
            <div className="Header">
            <img src = {logo}
            className="Header-logo"  
            alt="Header-logo"/>
              <h1>Crypto World</h1>

            </div>
        )
    
}


export default Header;