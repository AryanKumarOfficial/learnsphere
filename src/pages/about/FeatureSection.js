import React from "react";
import aboutImg from "../../assets/images/about/ab.png";

const VisionMission = () => {
    return (
        <section style={{ backgroundColor: "white", padding: "4rem 2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
                {/* Image */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src={"https://next-school-web-app.vercel.app/_next/image?url=%2Fimages%2Fscientist%20boy.jpg&w=1200&q=75"}
                        alt="Vision and Mission"
                        width={400}
                        height={400}
                        style={{ borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                    />
                </div>
                {/* Text Content */}
                <div>
                    <h3 style={{ color: "green", fontWeight: "600", fontSize: "1.25rem" }}>Our Vision & Mission</h3>
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333", marginTop: "0.5rem" }}>
                        Shaping the Future of Learning
                    </h2>
                    <p style={{ color: "#555", marginTop: "1rem" }}>
                        <strong>Vision:</strong> To be a globally recognized institution that nurtures innovation, creativity,
                        and excellence in education, empowering students to become future leaders and change-makers.
                    </p>
                    <p style={{ color: "#555", marginTop: "1rem" }}>
                        <strong>Mission:</strong> Our mission is to provide an inclusive, dynamic learning environment
                        that fosters intellectual growth, ethical values, and practical skills. We are committed to
                        integrating advanced teaching methodologies, embracing technology, and promoting a culture
                        of lifelong learning.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
