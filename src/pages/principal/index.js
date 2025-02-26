import Header from "../../components/Header";
import Logo from "../../assets/images/logos/logo2.png";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollTop from "../../components/ScrollTop";
import FooterTwo from "../../components/Footer/FooterTwo";
import History from "./History";

export default function PrincipalPage() {
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
                    <Breadcrumb pageTitle={"Principal's Message"}/>
                    <History/>
                    <ScrollTop/>
                </div>
            </section>
            <FooterTwo isCta={false}/>
        </>
    )
}