import React from "react";

import AboutPart from './AboutSection'
import Testimonial from './TestimonialSection'
import Feature from './FeatureSection'
import Instructor from './InstructorSection'
import Committee from "./Committee";
import Achievements from "./Achievements";

const AboutMain = () => {


    return (
        <>
            <AboutPart/>

            <Feature/>

            <Instructor/>

            <Committee/>

            <Achievements/>

            {/*<Testimonial/>*/}
        </>
    )
}

export default AboutMain;