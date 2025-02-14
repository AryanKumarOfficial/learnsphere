import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CourseGridMain from '../course/CourseGridMain';
import ScrollToTop from '../../components/ScrollTop';
import curriculam from '../../data/curriculum.json';

import Logo from '../../assets/images/logos/logo2.png';
import CurriculumGridMain from "./CurriculumGridMain";

const Curriculum = () => {
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
                    pageTitle="Co Curriculum Activities"
                />

                <CurriculumGridMain curriculam={curriculam}/>

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

