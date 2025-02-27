import Logo from "../../../assets/images/logos/logo2.png";
import React from "react";
import Header from "../../../components/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import ScrollTop from "../../../components/ScrollTop";
import FooterTwo from "../../../components/Footer/FooterTwo";
import Glance from "./Glance";

export default function GlancePage() {
    return (
        <>
            <Header
                parentMenu='academics'
                menuCategoryEnable='enable'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
            />
            <section className={"react-wrapper"} style={{minHeight: "100vh"}}>
                <div className={"react-wrapper-inner"}>
                    <Breadcrumb pageTitle={"School At Glance"}/>
                    <Glance/>
                    <ScrollTop/>
                </div>
            </section>
            <FooterTwo isCta={false}/>
        </>
    )
}