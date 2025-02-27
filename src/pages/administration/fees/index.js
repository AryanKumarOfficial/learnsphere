import Logo from "../../../assets/images/logos/logo2.png";
import React from "react";
import Header from "../../../components/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import ScrollTop from "../../../components/ScrollTop";
import FooterTwo from "../../../components/Footer/FooterTwo";
import Fees from "./Fees";

export default function FeesAndScholarshipPage() {
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
                    <Breadcrumb pageTitle={"Fees and Scholarship"}/>
                    <Fees/>
                    <ScrollTop/>
                </div>
            </section>
            <FooterTwo isCta={false}/>
        </>
    )
}