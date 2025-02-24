import React from "react";
import aboutImg from "../../assets/images/about/ab.png";

const AboutUs = () => {
    return (
        <section style={{ backgroundColor: "white", padding: "4rem 2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
                {/* Text Content */}
                <div>
                    <h3 style={{ color: "green", fontWeight: "600", fontSize: "1.25rem" }}>Our History</h3>
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333", marginTop: "0.5rem" }}>
                        A Legacy of Excellence in Education
                    </h2>
                    <p style={{ color: "#555", marginTop: "1rem" }}>
                        Established in 1995, Future Bright Academy has been a cornerstone of education,
                        fostering excellence in academics, co-curricular activities, and character building.
                        Our journey began with a vision to create a learning environment that nurtures young minds
                        and prepares them for the challenges of the future.
                    </p>
                    <p style={{ color: "#555", marginTop: "1rem" }}>
                        Today, Future Bright Academy is home to 5,000 students and a dedicated faculty of 250 teachers,
                        all working together to uphold our legacy of excellence. Our institution continues to be a pioneer
                        in education, integrating the latest teaching methodologies, technology-driven learning, and a
                        student-centric approach.
                    </p>
                </div>
                {/* Image */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src={aboutImg}
                        alt="Teacher with students"
                        width={400}
                        height={400}
                        style={{ borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;