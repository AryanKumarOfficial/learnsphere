import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import ScrollToTop from '../../components/ScrollTop';
import schoolactivities from '../../data/schoolactivities.json';

import Logo from '../../assets/images/logos/logo2.png';
import SchoolActivitesGridMain from "./SchoolActivitesGridMain";

const Curriculum = () => {
    return (
        <body className="courses-grid-page">
        <Header
            parentMenu='Co Curriculum Activities'
            menuCategoryEnable='enable'
            headerNormalLogo={Logo}
            headerStickyLogo={Logo}
        />

        <div className="react-wrapper">
            <div className="react-wrapper-inner">
                <Breadcrumb
                    pageTitle="Co Curriculum Activities"
                />

                <SchoolActivitesGridMain/>

                {/* scrolltop-start */}
                <ScrollToTop/>
                {/* scrolltop-end */}
            </div>
        </div>

        <Footer/>

        </body>
    );
}


export default Curriculum;

