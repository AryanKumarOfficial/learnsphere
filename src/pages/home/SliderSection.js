import { Link } from 'react-router-dom';
import Slider from "react-slick";

const HomeSlider = () => {
    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        margin: 0,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="react-slider-part">
            <div className="home-sliders home2 h-50">
                <Slider {...sliderSettings}>
                    {["/school-1.png", "/school-2.png"].map((imgSrc, index) => (
                        <div className="single-slide" key={index}>
                            <div className="slider-img-wrapper">
                                <div className="slider-overlay"></div>
                                <img className="desktop" src={imgSrc} alt={`Slider Image ${index + 1}`} />
                                <img className="mobile" src={imgSrc} alt={`Slider Image ${index + 1}`} />
                            </div>
                            <div className="container">
                                <div className="slider-content">
                                    <div className="content-part">
                                        <span className="slider-pretitle wow animate__fadeInUp" data-wow-duration="1s">Join </span>
                                        <h2 className="slider-title wow animate__fadeInUp" data-wow-duration="1s">
                                            Future Minds Academy,
                                            <br/>
                                            <span className="fs-3"> where excellence meets opportunity</span>
                                        </h2>
                                        <div className="slider-btn wow animate__fadeInUp" data-wow-duration="1.2s">
                                            <Link to="/about" className="react-btn-border">Admissions</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <style jsx>{`
                .slider-img-wrapper {
                    position: relative;
                }
                .slider-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 1;
                }
                .slider-img-wrapper img {
                    width: 100%;
                    display: block;
                    position: relative;
                    z-index: 0;
                }
                .slider-content {
                    position: relative;
                    z-index: 2;
                    color: #fff;
                }
            `}</style>
        </div>
    );
}

export default HomeSlider;