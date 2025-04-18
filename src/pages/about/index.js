import React from 'react';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer/FooterTwo';
import Breadcrumb from '../../components/Breadcrumb';
import ScrollToTop from '../../components/ScrollTop';
import AboutMain from './AboutMain';

import Logo from '../../assets/images/logos/logo2.png';

const About = () => {

    return (
        <>
            <Header
                parentMenu='about'
                menuCategoryEnable='enable'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
            />

            <div class="react-wrapper">
                <div class="react-wrapper-inner">

                    <Breadcrumb pageTitle="About Us"/>

                    <AboutMain/>

                    {/* scrolltop-start */}
                    <ScrollToTop/>
                    {/* scrolltop-end */}
                </div>
            </div>

            <FooterTwo ctaBtn={"Learn More"} ctaTitle={"Explore our Programs"}/>

        </>
    );
}

export default About;