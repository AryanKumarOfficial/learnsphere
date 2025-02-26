import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MandatoryDisclosure() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out-quad'
        });
    }, []);

    return (
        <div className="container py-5">
            <header className="text-center mb-5" data-aos="fade-down">
                <h2 className="display-4 fw-bold text-dark">Transparency & Compliance - Mandatory Disclosure</h2>
                <p className="lead text-muted">Ensuring Transparency & Compliance with Regulatory Standards</p>
            </header>

            <section className="row g-4">
                <div className="col-md-6" data-aos="fade-right">
                    <div className="p-4 bg-white shadow rounded-4">
                        <h4 className="fw-bold text-primary">School Details</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Name: Future Bright Academy</li>
                            <li className="list-group-item">Affiliation No: 123456</li>
                            <li className="list-group-item">Principal: Dr. Anjali Verma</li>
                            <li className="list-group-item">Medium: English</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6" data-aos="fade-left">
                    <div className="p-4 bg-white shadow rounded-4">
                        <h4 className="fw-bold text-primary">Infrastructure</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Campus Area: 5 Acres</li>
                            <li className="list-group-item">Classrooms: 50</li>
                            <li className="list-group-item">Laboratories: 10</li>
                            <li className="list-group-item">Library: 5000+ Books</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="row g-4 mt-4">
                <div className="col-md-6" data-aos="fade-right">
                    <div className="p-4 bg-white shadow rounded-4">
                        <h4 className="fw-bold text-primary">Faculty</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Total Teachers: 70</li>
                            <li className="list-group-item">Qualified Staff: 90%</li>
                            <li className="list-group-item">Student-Teacher Ratio: 25:1</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6" data-aos="fade-left">
                    <div className="p-4 bg-white shadow rounded-4">
                        <h4 className="fw-bold text-primary">Other Information</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Transport Facility: Available</li>
                            <li className="list-group-item">Sports Facilities: Yes</li>
                            <li className="list-group-item">Hostel: No</li>
                        </ul>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .shadow {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .shadow:hover {
                    transform: translateY(-5px);
                    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
                }

                .rounded-4 {
                    border-radius: 1rem !important;
                }
            `}</style>
        </div>
    );
}
