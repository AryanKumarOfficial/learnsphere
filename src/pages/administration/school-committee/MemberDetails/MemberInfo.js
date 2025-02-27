import React from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import {schoolManagingCommittee} from "../../../../data/committees";
import {FaGraduationCap, FaEnvelope, FaExclamationTriangle} from "react-icons/fa";
import "./memberDetails.css"

const MemberInfo = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const member = schoolManagingCommittee.find(m => m.id === Number(id));

    if (!member) {
        return (
            <div
                className="no-data-container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
                <FaExclamationTriangle className="text-danger mb-3" size={70}/>
                <h2 className="text-danger fw-bold">Oops! Member Not Found</h2>
                <p className="text-muted fs-5">The requested member does not exist or might have been removed.</p>
                <Link to="#" onClick={() => {
                    navigate(-1);
                }} className="btn btn-secondary mt-4">← Back to Members</Link>
            </div>
        );
    }

    return (
        <section className="container my-5 py-4">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div
                        className="card member-card shadow-lg border-0 rounded-4 p-5 animate__animated animate__fadeIn">
                        <div className="row align-items-center">
                            {/* Profile Image */}
                            <div className="col-md-4 text-center mb-4 mb-md-0">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="member-image rounded-circle img-fluid border border-3"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="col-md-8">
                                <h2 className="fw-bold text-primary">{member.name}</h2>
                                <h4 className="text-muted">{member.designation}</h4>

                                {/* Qualification */}
                                <p className="fw-semibold mt-3">
                                    <FaGraduationCap className="text-warning me-2"/>
                                    {member.qualification}
                                </p>

                                {/* Email */}
                                <p className="fw-semibold">
                                    <FaEnvelope className="text-danger me-2"/>
                                    <a href={`mailto:${member.email}`}
                                       className="text-dark text-decoration-none">{member.email}</a>
                                </p>

                                {/* Buttons */}
                                <div className="mt-4">
                                    <a href={`mailto:${member.email}`} role={"button"}
                                       className="btn btn-outline-primary me-3">📩 Contact</a>
                                    <Link to="#" onClick={() => {
                                        navigate(-1);
                                    }} role={"button"} className="btn btn-outline-danger">← Back</Link>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="my-4 divider"/>

                        {/* About Section */}
                        <div className="px-3">
                            <h5 className="fw-bold text-dark">About {member.name}</h5>
                            <p className="text-secondary">{member.about}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MemberInfo;
