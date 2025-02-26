import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import infrastructureData from "./data.json"; // JSON Data

export default function InfrastructureGallery() {
    const [activeTab, setActiveTab] = useState("campus");
    const [data, setData] = useState({});
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        AOS.init({duration: 1000, once: true});
        setData(infrastructureData[0]);
    }, []);

    const switchTab = (tab) => {
        setActiveTab(tab);
        setAnimationKey((prev) => prev + 1);
    };

    return (
        <div className="container py-5">

            {/* Tab Navigation */}
            <ul className="nav nav-pills justify-content-center mb-4">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "campus" ? "active" : ""}`}
                        onClick={() => switchTab("campus")}
                    >
                        🏢 Campus
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "library" ? "active" : ""}`}
                        onClick={() => switchTab("library")}
                    >
                        📚 Library
                    </button>
                </li>
            </ul>

            {/* Content Section */}
            <div key={animationKey} className="fade-slide">
                <div className="row g-4">
                    {(activeTab === "campus" ? data?.campus : data?.library)?.map(
                        (item, index) => (
                            <div className="col-md-4" key={item.id}>
                                <div
                                    className="infra-card"
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 150}
                                >
                                    <img src={item.src} alt={item.title} className="card-img"/>
                                    <div className="card-overlay">
                                        <div className="text-content">
                                            <h5>{item.title}</h5>
                                            <p>{item.subTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Summary Section */}
            <div className="summary-box" data-aos="flip-up">
                <h3 className={"text-center text-white fw-bold"}>🌟 Infrastructure Overview</h3>
                <ul>
                    <li>
                        <strong>🏢 Campus Area:</strong> 50 acres of modern facilities
                    </li>
                    <li>
                        <strong>📚 Library Capacity:</strong> Over 10,000 books and digital
                        resources
                    </li>
                    <li>
                        <strong>🚌 Transport:</strong> 20+ buses covering major city routes
                    </li>
                    <li>
                        <strong>🏠 Hostel Accommodation:</strong> Spacious rooms for 500+
                        students
                    </li>
                </ul>
            </div>

            {/* Custom CSS */}
            <style>
                {`
          .text-gradient {
            background: linear-gradient(90deg, #007bff, #6610f2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .nav{
          gap: 20px;
          }

          .nav-pills .nav-link {
            font-size: 18px;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 30px;
            transition: all 0.3s ease;
            color: #007bff;
            background: #f8f9fa;
            border: 2px solid #007bff;
          }

          .nav-pills .nav-link.active {
            background: #007bff;
            color: white;
            border-color: #007bff;
          }

          .fade-slide {
            animation: fadeSlide 0.5s ease-in-out;
          }

          @keyframes fadeSlide {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .infra-card {
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .infra-card:hover {
            transform: scale(1.05);
            box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.4);
          }

          .card-img {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }

          .card-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .infra-card:hover .card-overlay {
            opacity: 1;
          }

          .text-content {
            color: white;
            font-size: 18px;
            font-weight: bold;
            text-transform: uppercase;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }
          
          .text-content h5 {
            color: #f8f9fa;
            font-size: 24px;
            margin-bottom: 5px;
            }

          .infra-card:hover .text-content {
            transform: translateY(-10px);
          }

          .summary-box {
            background: linear-gradient(135deg, #007bff, #6610f2);
            color: white;
            padding: 30px;
            border-radius: 15px;
            text-align: left;
            margin-top: 50px;
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
          }

          .summary-box ul {
            list-style: none;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: space-between;
            flex-direction: column;
            margin-top: 20px;
          }

          .summary-box ul li {
            font-size: 18px;
            margin: 10px 0;
          }
        `}
            </style>
        </div>
    );
}
