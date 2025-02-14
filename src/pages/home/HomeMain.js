import React from 'react';
import Blog from './BlogSection';
import About from './AboutSection';
import Service from './ServiceSection';
import HomeSlider from './SliderSection';
import Campus from './CampusSection';
import Course from './CourseSection';
import Event from './EventSection';
import Counter from './CounterSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from '../../components/ScrollTop';
import SectionTitle from "../../components/SectionTitle";
import PrincipalMessage from "../../components/principal";
import LatestServices from "../../components/Service/LatestServices";
import News from "../../components/News";
import NewsSection from "./NewsSection";

const HomeMain = () => {
    return (
        <>
            <div className="react-wrapper">
                <div className="react-wrapper-inner">
                    {/* SliderSection-start */}
                    <HomeSlider/>
                    {/* Principal Section Starts */}
                    <SectionTitle sectionClass={"react__title__section text-center mt-5"}
                                  Title={"Principal's Message"}/>
                    <PrincipalMessage/>
                    {/* Principal Section ends */}

                    {/* Vision and mission section */}
                    <SectionTitle sectionClass={"react__title__section text-center mt-5"}
                                  Title={"Vision & Mission"}/>
                    <section className={"container about__area_one"}>
                        <SectionTitle sectionClass={"react__title__section mt-5"}
                                      titleClass={"react__tittle fs-2"} Title={"Vision"} isDecoration={false}/>
                        <p className={"about__paragraph wow animate__fadeInUp centered center text-black"}>
                            At Bright Future Academy, we envision a learning community where every child is empowered to
                            become a lifelong learner, an innovative thinker, and a compassionate global citizen. We
                            strive to spark curiosity, nurture creativity, and instill a strong sense of integrity and
                            responsibility in all our students.
                        </p>
                        <SectionTitle sectionClass={"react__title__section mt-5"}
                                      titleClass={"react__tittle fs-2"} Title={"Mission"} isDecoration={false}/>
                        <p className={"about__paragraph wow animate__fadeInUp centered text-black"}>
                            At Bright Future Academy, our mission is to cultivate an environment that nurtures both
                            academic excellence and holistic development. We empower each student to explore their
                            unique talents and embrace the journey of lifelong learning. Our dynamic curriculum combines
                            rigorous academics with creative expression, ensuring that every lesson is both engaging and
                            meaningful. Through strong partnerships with parents and the community, we strive to shape
                            confident, compassionate global citizens.
                        </p>
                    </section>
                    {/* Vision and mission section */}

                    {/*Counters */}
                    <SectionTitle sectionClass={"react__title__section text-center mt-5"}
                                  Title={"Counters"}/>
                    <Counter/>
                    {/*Counters */}


                    {/*News & Achievements*/}
                    {/*<News/>*/}
                    {/*<Blog/>*/}
                    <NewsSection/>
                    {/*News & Achievements*/}

                    {/*<Service/>*/}
                    <LatestServices/>
                    {/* Service-area-end */}

                    {/* About-area-start */}
                    {/*<About/>*/}
                    {/* About-area-end */}

                    {/* Campus-area-start */}
                    {/*<Campus/>*/}
                    {/* Campus-area-end */}

                    {/* Course-area-start */}
                    {/*<Course/>*/}
                    {/* Course-area-end */}

                    {/* Counter-area-start */}
                    {/* Counter-area-end */}

                    {/* Event-area-start */}
                    {/*<Event/>*/}
                    {/* Event-area-end */}

                    {/* testmonial-area-start */}
                    {/*<Testimonial/>*/}
                    {/* testmonial-area-end */}

                    {/* blog-area-start */}
                    {/* blog-area-end */}

                    {/* scrolltop-start */}
                    <ScrollToTop
                        scrollClassName="home react__up___scroll"
                    />
                    {/* scrolltop-end */}
                </div>
            </div>

        </>
    );
}

export default HomeMain;