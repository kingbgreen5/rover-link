import React from 'react';
import DataCard from './DataCard';
import mobileBanner from ".assets/Mobile Banner.png";
import mobileBanner from "/assets/Mobile Banner.png";
import desktopBanner from "/assets/Desktop Banner2-cropped.png";

const Header = () => {
    return (
        <header className ="header">
{/*   
         <img className='header-img-desktop'    src="../../assets/Desktop Banner2-cropped.png" alt="" />
         <img className='header-img-mobile'    src="../../assets/Mobile Banner.png" alt="" />

          */}

<img className='header-img-mobile' src={mobileBanner} alt="" />
<img className='header-img-desktop' src={desktopBanner} alt="" />

         {/* <div>  <h1>    Red Planet Explorer</h1>
         <h3>Images from Rovers Curiosity and Perseverance</h3>
         </div> */}

            </header>
    );
};

export default Header;