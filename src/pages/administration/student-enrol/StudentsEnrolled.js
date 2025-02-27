import React, {useState} from "react";
import {Accordion} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {enrollments} from "../../../data/enrollments";
import "./AccordionStyles.css";
import {FaChevronDown} from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";

const EnrollmentAccordion = () => {
    const [activeKey, setActiveKey] = useState(null);

    const toggleAccordion = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    return (
        <div className="container mt-4">
            <SectionTitle Title="Enrollment Details" isDecoration={true}
                          sectionClass={"mb-5 react__title__section text-center"}/>
            <Accordion activeKey={activeKey}>
                {enrollments.map((student, index) => (
                    <Accordion.Item eventKey={index.toString()} key={student.student_id}
                                    className="accordion-item-custom">
                        <Accordion.Header onClick={() => toggleAccordion(index.toString())}
                                          className="accordion-header-custom d-flex justify-content-between align-items-center">
                            <span className={"fw-bold"}>{student.name} - {student.grade}</span>
                        </Accordion.Header>
                        <Accordion.Body
                            className={`accordion-body-custom ${activeKey === index.toString() ? "show" : ""}`}>
                            <p><strong>Student ID:</strong> {student.student_id}</p>
                            <p><strong>Enrollment Date:</strong> {student.enrollment_date}</p>
                            {student.status && <p><strong>Status:</strong> {student.status}</p>}
                            {student.parent_name && <p><strong>Parent Name:</strong> {student.parent_name}</p>}
                            {student.contact &&
                                <p><strong>Contact:</strong> <a className={"text-secondary"}
                                                                href={`tel:${student.contact}`}>{student.contact}</a>
                                </p>}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
};

export default EnrollmentAccordion;
