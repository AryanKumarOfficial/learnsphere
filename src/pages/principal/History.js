import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PrincipalMessage() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out-quad'
        });
    }, []);

    return (
        <div className="container py-4 py-lg-5">
            {/* Header Section */}
            <header className="text-center mb-4 mb-lg-5" data-aos="zoom-in">
                <h2 className="display-5 fw-bold text-primary mb-3">
                    10+ Years of Educational Excellence
                </h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <p className="lead text-muted mb-4">
                            Nurturing Tomorrow's Leaders Through Innovative Learning
                        </p>
                    </div>
                </div>
            </header>

            {/* Introduction Section */}
            <section className="row g-4 g-lg-5 align-items-center mb-5">
                <div className="col-lg-6" data-aos="fade-right">
                    <img
                        src="https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg"
                        className="img-fluid rounded-4 shadow-lg"
                        alt="Students learning at Future Bright Academy"
                        loading="lazy"
                    />
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <div className="ps-lg-4">
                        <h3 className="h4 text-secondary mb-3">Welcome to Our Learning Community</h3>
                        <p className="mb-4">
                            At <strong>Future Bright Academy</strong>, we combine academic rigor with
                            character development in a technology-enhanced environment. Our
                            multidimensional approach fosters intellectual curiosity, creativity,
                            and social responsibility.
                        </p>
                        <ul className="list-unstyled">
                            <li className="d-flex mb-2">
                                <i className="bi bi-check2-circle text-primary me-2"></i>
                                <span>STEM-focused curriculum with AI integration</span>
                            </li>
                            <li className="d-flex mb-2">
                                <i className="bi bi-check2-circle text-primary me-2"></i>
                                <span>360° personality development programs</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Principal's Message Section */}
            <section className="p-4 p-lg-5 rounded-4 w-100 bg-light" data-aos="zoom-in">
                <div className="row align-items-center g-4">
                    <div className="col-md-4 text-center" data-aos="flip-right">
                        <img
                            src="/principal.jpg"
                            className="img-fluid rounded-3 shadow-sm"
                            alt="Dr. Anjali Verma, Principal"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-md-8">
                        <h3 className="h2 mb-3 text-primary">Principal's Message</h3>
                        <p className="text-muted mb-2">Dr. Anjali Verma, Ph.D. in Educational Leadership</p>
                        <p className="lead mb-4">
                            "Our commitment extends beyond academics to developing resilient,
                            ethical leaders equipped for 21st-century challenges."
                        </p>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <div className="p-3 bg-white rounded-3 border">
                                    <h4 className="h6 mb-2">Core Philosophy</h4>
                                    <p className="small mb-0">Student-centric learning with global perspectives</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="p-3 bg-white rounded-3 border">
                                    <h4 className="h6 mb-2">2024 Focus</h4>
                                    <p className="small mb-0">Sustainability education and digital citizenship</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 pt-2 border-top">
                            <p className="mb-1 fw-bold">Dr. Anjali Verma</p>
                            <p className="small text-muted mb-0">
                                12+ Years Educational Leadership | NEP 2020 Implementation Expert
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Styles */}
            <style jsx>{`
                .bi-check2-circle {
                    font-size: 1.2rem;
                }

                .bg-light {
                    background-color: #f8f9fa !important;
                }

                .rounded-4 {
                    border-radius: 1rem !important;
                }

                @media (max-width: 768px) {
                    .p-lg-5 {
                        padding: 2rem !important;
                    }
                }
            `}</style>
        </div>
    );
}