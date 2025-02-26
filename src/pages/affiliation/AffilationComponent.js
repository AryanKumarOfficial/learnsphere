import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {FaChevronDown, FaChevronUp} from "react-icons/fa"; // Import icons
import "./Accordion.css"; // Custom CSS for responsive styles

const affiliations = [
    {
        board: "CBSE",
        affiliation_number: "CBSE-1256",
        category: "Senior Secondary School",
        date_of_affiliation: "2014-06-15",
        validity: "2029-03-31",
        status: "Active",
        location: "Delhi Zone",
    },
    {
        board: "ICSE",
        affiliation_number: "ICSE-2054",
        category: "Secondary School",
        date_of_affiliation: "2016-04-10",
        validity: "2031-03-31",
        status: "Active",
        location: "Mumbai Zone",
    },
    {
        board: "State Board",
        affiliation_number: "SB-3089",
        category: "Higher Secondary School",
        date_of_affiliation: "2017-07-25",
        validity: "2032-03-31",
        status: "Active",
        location: "Bhopal Zone",
    },
    {
        board: "IB",
        affiliation_number: "IB-6789",
        category: "International School",
        date_of_affiliation: "2019-09-12",
        validity: "2035-03-31",
        status: "Active",
        location: "Bangalore Zone",
    },
    {
        board: "NIOS",
        affiliation_number: "NIOS-4567",
        category: "Open Schooling",
        date_of_affiliation: "2020-05-18",
        validity: "2030-03-31",
        status: "Active",
        location: "Chennai Zone",
    },
];

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mt-5 min-vh-100 d-flex justify-content-around w-100 align-items-center">
            <div className="accordion-container w-100">
                <div className="accordion w-100" id="accordionExample">
                    {affiliations.map((affiliation, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button d-flex justify-content-between align-items-center ${openIndex === index ? "" : "collapsed"}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`collapse${index}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span>{affiliation.board} - {affiliation.affiliation_number}</span>
                                    <span className={`icon ${openIndex === index ? "rotate-up" : "rotate-down"}`}>
                                        {openIndex === index ? <FaChevronUp/> : <FaChevronDown/>}
                                    </span>
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <p><strong>Category:</strong> {affiliation.category}</p>
                                    <p><strong>Date of Affiliation:</strong> {affiliation.date_of_affiliation}</p>
                                    <p><strong>Validity:</strong> {affiliation.validity}</p>
                                    <p><strong>Status:</strong><span
                                        className={`${affiliation.status === "Active" ? "text-success" : ""} ml----4`}>{affiliation.status}</span>
                                    </p>
                                    <p><strong>Location:</strong> {affiliation.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
