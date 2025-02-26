import Header from "../../components/Header";
import Logo from "../../assets/images/logos/logo2.png";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import AffiliationAccordion from "./AffilationComponent";
import ScrollTop from "../../components/ScrollTop";
import SectionTitle from "../../components/SectionTitle";
import FooterTwo from "../../components/Footer/FooterTwo";

export default function AffiliationPage() {
    return (
        <>
            <Header
                parentMenu='about'
                menuCategoryEnable='enable'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
            />
            <section className={"react-wrapper"} style={{minHeight: "100vh"}}>
                <div className={"react-wrapper-inner"}>
                    <Breadcrumb pageTitle={"Affiliation"}/>
                    <AffiliationAccordion/>
                    <ScrollTop/>
                </div>
            </section>
            <FooterTwo isCta={false}/>
        </>
    )
}