import React from 'react';
import DataCard from './DataCard';
import mobileBanner from "../assets/Mobile Banner.png";
import desktopBanner from "../assets/Desktop Banner2-cropped.png";

const Header = () => {
    return (
        <header className ="header">

<img className='header-img-mobile' src={mobileBanner} alt="" />
<img className='header-img-desktop' src={desktopBanner} alt="" />


            </header>
    );
};

export default Header;