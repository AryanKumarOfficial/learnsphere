import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import ScrollToTop from '../../components/ScrollTop';

import Logo from '../../assets/images/logos/logo2.png';
import CommunityActivitesGridMain from "./CommunityActivitesGridMain";

const Olympiad = () => {
    return (
        <body className="courses-grid-page">
        <Header
            parentMenu='more'
            menuCategoryEnable='enable'
            headerNormalLogo={Logo}
            headerStickyLogo={Logo}
        />

        <div className="react-wrapper">
            <div className="react-wrapper-inner">
                <Breadcrumb
                    pageTitle="Community Services"
                />

                <CommunityActivitesGridMain/>

                {/* scrolltop-start */}
                <ScrollToTop/>
                {/* scrolltop-end */}
            </div>
        </div>

        <Footer/>

        </body>
    );
}


export default Olympiad;

