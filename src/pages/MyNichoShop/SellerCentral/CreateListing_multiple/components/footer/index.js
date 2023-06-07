import React from 'react';
import Norton from "assets/logo/norton.png"

const Footer = () => {
    return (
        <div className='main-create-list'>
            <footer className='footer'>
                Copyright 2017 nichoShop Inc. All Rights Reserved. User Agreement, Privicy and Cookies
                <img src={Norton} className="mark"/>
            </footer>
        </div>
    )
}
export default Footer;