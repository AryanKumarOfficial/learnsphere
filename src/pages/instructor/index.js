import React from 'react';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer/FooterTwo';
import Breadcrumb from '../../components/Breadcrumb';
import InstructorMain from './InstructorMain';
import ScrollToTop from '../../components/ScrollTop';

import Logo from '../../assets/images/logos/logo2.png';

const Instructor = () => {
    return (
        <>
            <Header
                parentMenu='administration'
                menuCategoryEnable='enable'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
            />

            <div class="react-wrapper">
                <div class="react-wrapper-inner">
                    <Breadcrumb
                        pageTitle="Staff Details"
                    />

                    <InstructorMain />

                    {/* scrolltop-start */}
                    <ScrollToTop />
                    {/* scrolltop-end */}
                </div>
            </div>

            <FooterTwo isCta={false} />

        </>
    );
}


export default Instructor;

