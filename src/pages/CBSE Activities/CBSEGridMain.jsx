import React, {useState} from "react";
import {Link} from "react-router-dom";

import cbseActivities from "../../data/cbseactivities.json";
import CBSEThree from "./CBSEThree"

const CBSEGridMain = () => {
    const [category, setCategory] = useState("all");

    const handleChangeCategory = (e) => {
        setCategory(e.target.value.toLowerCase());
    };

    // Filtered courses based on selected category
    const filteredCourses =
        category === "all"
            ? cbseActivities
            : cbseActivities.filter((course) => course.category.toLowerCase() === category);

    return (
        <div className="react-course-filter back__course__page_grid pb---40 pt---110">
            <div className="container pb---70">
                {/* Filter Section */}
                <div className="row align-items-center back-vertical-middle shorting__course mb-50">
                    <div className="col-md-2">
                        <div className="all__icons">
                            <div className="list__icons">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-sliders"
                                >
                                    <line x1="4" y1="21" x2="4" y2="14"></line>
                                    <line x1="4" y1="10" x2="4" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12" y2="3"></line>
                                    <line x1="20" y1="21" x2="20" y2="16"></line>
                                    <line x1="20" y1="12" x2="20" y2="3"></line>
                                    <line x1="1" y1="14" x2="7" y2="14"></line>
                                    <line x1="9" y1="8" x2="15" y2="8"></line>
                                    <line x1="17" y1="16" x2="23" y2="16"></line>
                                </svg>
                            </div>
                            <div className="result-count">Filters</div>
                        </div>
                    </div>
                    <div className="col-md-10 text-right">
                        <select className="from-control category" onChange={handleChangeCategory}>
                            <option value="All">All</option>
                            <option value="Science">Science</option>
                            <option value="Debate">Debate</option>
                            <option value="Quiz">Quiz</option>
                            <option value="Yoga">Yoga</option>
                            <option value="Olympiad">Olympiad</option>
                            <option value="Environment">Environment</option>
                            <option value="Art">Art</option>
                            <option value="Sports">Sports</option>
                            <option value="Robotics">Robotics</option>
                            <option value="Dance">Dance</option>
                            <option value="Literature">Literature</option>
                            <option value="Music">Music</option>
                            <option value="Technology">Technology</option>
                            <option value="Guidance">Guidance</option>
                            <option value="Leadership">Leadership</option>
                            <option value="Photography">Photography</option>
                            <option value="Drama">Drama</option>
                            <option value="Astronomy">Astronomy</option>


                        </select>
                    </div>
                </div>

                {/* Result Count Section */}
                <div className="row align-items-center back-vertical-middle shorting__course2 mb-50">
                    <div className="col-md-6">
                        <div className="all__icons">
                            <div className="result-count">
                                We found {filteredCourses.length} course(s) available for you
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">
                        <select className="from-control">
                            <option>Sort by: Default</option>
                            <option>Sort by popularity</option>
                            <option>Sort by average rating</option>
                            <option>Sort by latest</option>
                            <option>Sort by price: low to high</option>
                            <option>Sort by price: high to low</option>
                        </select>
                    </div>
                </div>

                {/* Course Grid Section */}
                <div className="row">
                    {filteredCourses.map((data, index) => (
                        <div key={index} className="col-lg-4">
                            <CBSEThree
                                id={data.id}
                                image={data.image}
                                title={data.title}
                                description={data.description}
                                date={data.date}
                                category={data.category}
                            />
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <ul className="back-pagination pt---20">
                    <li>
                        <Link to="#">1</Link>
                    </li>
                    <li>
                        <Link to="#">2</Link>
                    </li>
                    <li className="back-next">
                        <Link to="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-arrow-right"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CBSEGridMain;
