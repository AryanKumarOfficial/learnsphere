import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from "react-router-dom";

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

            {/* Read More Section */}
            <div className={"float-end"}>
                <Link to="/principal" className=" btn btn-outline-danger btn-lg "> Read More <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg></Link>
            </div>

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