import React from 'react';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer/FooterTwo';
import Breadcrumb from '../../components/Breadcrumb';
import ScrollToTop from '../../components/ScrollTop';

import Logo from '../../assets/images/logos/logo2.png';
import LightRoom from "./LightRoom";

const Gallery = () => {

    return (
        <>
            <Header
                parentMenu='about'
                menuCategoryEnable='enable'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
            />

            <div className="react-wrapper" style={{
                minHeight: "100vh",
            }}>
                <div className="react-wrapper-inner">

                    <Breadcrumb pageTitle="Gallery"/>


                    <LightRoom/>
                    {/* scrolltop-start */}
                    <ScrollToTop/>
                    {/* scrolltop-end */}
                </div>
            </div>

            <FooterTwo isCta={false} ctaBtn={"Learn More"} ctaTitle={"Explore our Programs"}/>

        </>
    );
}

export default Gallery;