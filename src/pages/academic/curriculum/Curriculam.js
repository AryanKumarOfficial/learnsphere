import React from "react";
import {FaBookOpen, FaChartBar, FaFlask, FaSchool} from "react-icons/fa6";
import {FaGraduationCap, FaPaintBrush} from "react-icons/fa";
import {Link} from "react-router-dom";
import topicImg1 from "../../../assets/images/topics/1.svg";
import topicImg2 from "../../../assets/images/topics/2.png";
import topicImg3 from "../../../assets/images/topics/3.svg";
import topicImg4 from "../../../assets/images/topics/4.svg";

export default function Curriculum() {
    const data = [
        {
            name: "Pre-Primary",
            description: "Nursery to KG",
            icon: <FaBookOpen className={"rounded-circle border p-4"} size={100}/>,
            color: "text-blue-600"
        },
        {
            name: "Primary",
            description: "Class 1 to 5",
            icon: <FaGraduationCap className={"rounded-circle border p-4"} size={100}/>,
            color: "text-green-600"
        },
        {
            name: "Middle School",
            description: "Class 6 to 8",
            icon: <FaSchool className={"rounded-circle border p-4"} size={100}/>,
            color: "text-purple-600"
        },
        {
            name: "Secondary",
            description: "Class 9 & 10",
            icon: <FaBookOpen className={"rounded-circle border p-4"} size={100}/>,
            color: "text-orange-600"
        },
        {
            name: "Senior Secondary",
            description: "Class 11 & 12",
            icon: <FaGraduationCap className={"rounded-circle border p-4"} size={100}/>,
            color: "text-red-600"
        },
        {
            name: "Science Stream",
            description: "PCM/PCB",
            icon: <FaFlask className={"rounded-circle border p-4"} size={100}/>,
            color: "text-cyan-600"
        },
        {
            name: "Commerce",
            description: "With/Without Maths",
            icon: <FaChartBar className={"rounded-circle border p-4"} size={100}/>,
            color: "text-yellow-600"
        },
        {
            name: "Humanities",
            description: "Arts Stream",
            icon: <FaPaintBrush className={"rounded-circle border p-4"} size={100}/>,
            color: "text-pink-600"
        },
    ];
    return (
        <div className="react_populars_topics pt---120 pb---120">
            <div className="container">
                <div className="row pt---30">
                    {data.map(({name, description, icon}, index) => (
                        <div key={index} className="col-md-3 wow animate__fadeInUp" data-wow-duration="0.3s">
                            <div className="item__inner">
                                <div className="icon text-primary d-flex justify-content-center">
                                    {icon}
                                </div>
                                <div className="react-content">
                                    <h3 className="react-title"><Link to="/course">{name}</Link></h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}