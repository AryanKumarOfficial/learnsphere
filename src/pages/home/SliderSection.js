import {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HomeSlider.module.css"; // Import CSS module

const HomeSlider = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const sliderSettings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.reactSliderPart}>
            <div className={styles.homeSliders}>
                <Slider {...sliderSettings}>
                    {["/school-1.png", "/school-2.png"].map((imgSrc, index) => (
                        <div className={styles.singleSlide} key={index}>
                            <div className={styles.sliderImgWrapper}>
                                <div className={styles.sliderOverlay}></div>
                                <img className={styles.desktopImg} src={imgSrc} alt={`Slider Image ${index + 1}`}/>
                            </div>
                            <div className={`container ${styles.sliderContainer}`}>
                                <div className={styles.sliderContent}>
                                    <div className={styles.contentPart}>
                                        <span className={styles.sliderPretitle}>Join </span>
                                        <h2 className={styles.sliderTitle}>
                                            Future Minds Academy,
                                            <br/>
                                            <span className="fs-3"> where excellence meets opportunity</span>
                                        </h2>
                                        <div className={styles.sliderBtn}>
                                            <Link to="/admission"
                                                  className={styles.reactBtnBorder}>Admissions</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default HomeSlider;
