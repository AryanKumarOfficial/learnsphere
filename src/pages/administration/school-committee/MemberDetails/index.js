import Logo from "../../../../assets/images/logos/logo2.png";
import React from "react";
import MemberInfo from "./MemberInfo";
import Breadcrumb from "../../../../components/Breadcrumb";
import ScrollTop from "../../../../components/ScrollTop";
import FooterTwo from "../../../../components/Footer/FooterTwo";
import Header from "../../../../components/Header";

export default function MemberDetailsPage() {
    return (
        <>
            <Header
                parentMenu='administration'
                menuCategoryEnable='enable'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
            />
            <section className={"react-wrapper"} style={{minHeight: "100vh"}}>
                <div className={"react-wrapper-inner"}>
                    <Breadcrumb pageTitle={"Committee Member"}/>
                    <MemberInfo/>
                    <ScrollTop/>
                </div>
            </section>
            <FooterTwo isCta={false}/>
        </>
    )
}