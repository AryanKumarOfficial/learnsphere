import Header from "../../../components/Header";
import Logo from "../../../assets/images/logos/logo2.png";
import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import ScrollTop from "../../../components/ScrollTop";
import FooterTwo from "../../../components/Footer/FooterTwo";
import Members from "./Members";

export default function SchoolCommitteePage() {
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
                    <Breadcrumb pageTitle={"School Committee"}/>
                    <Members/>
                    <ScrollTop/>
                </div>
            </section>
            <FooterTwo isCta={false}/>
        </>
    )
}