import React from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {galleryData} from "../../../data/gallery";
import styles from "./glance.module.css"; // Import CSS Module

export default function SchoolAtGlance() {
    return (
        <Container className="my-5 d-flex flex-column align-items-center justify-content-center w-100">
            {/* Page Title & Intro */}
            <div className="text-center mb-5">
                <h2 className="fw-bold text-primary">🏫 Discover Our Campus</h2>
                <p className="text-muted">A glimpse of our vibrant school life and facilities.</p>
            </div>

            {/* Dynamic Grid Layout */}
            <Row className="g-4 w-100 d-flex justify-content-center">
                {galleryData.map((item) => (
                    <Col key={item.id} md={item.size === "large" ? 6 : 4} sm={6} xs={12}>
                        <Card className={`border-0 shadow-lg overflow-hidden position-relative ${styles.card}`}>
                            {/* Image */}
                            <Card.Img
                                variant="top"
                                src={item.src}
                                alt={item.alt}
                                className={`img-fluid ${styles.image}`}
                            />

                            {/* Hover Overlay */}
                            <div className={`${styles.overlay}`}>
                                <div className={styles.textContainer}>
                                    <h5 className="fw-bold text-white">{item.title}</h5>
                                    <p className="mb-0 text-white fs-6">{item.description}</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Optional CTA */}
            <div className="text-center mt-5 p-4 rounded bg-light shadow-sm">
                <h3 className="fw-bold text-primary">Ready to See More?</h3>
                <p className="text-muted">Explore our programs, faculty, and admission details to see how we can shape
                    your future.</p>
                <Button variant="primary" href="/admissions" className="px-4 py-2 shadow-lg hover-shadow">Visit
                    Admissions</Button>
            </div>
        </Container>
    );
}