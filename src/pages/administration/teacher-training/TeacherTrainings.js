import React, {useState} from "react";
import {Link} from "react-router-dom";
import SingleTeacherTrainingList from "./TeacherTrainingThree";
import {trainings} from "../../../data/trainings";

const ITEMS_PER_PAGE = 6;

const TeacherTrainingsGrid = () => {
    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);

    const handleChangeCategory = (e) => {
        setCategory(e.target.value.toLowerCase());
        setCurrentPage(1);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    // Filtering logic
    const filteredCourses = category === "all" ? trainings : trainings.filter((course) =>
        course.category && course.category.toLowerCase().includes(category)
    );

    // Sorting logic
    const sortedCourses = [...filteredCourses].sort((a, b) => {
        if (sortOrder === "latest") {
            return new Date(b.date) - new Date(a.date);
        } else if (sortOrder === "oldest") {
            return new Date(a.date) - new Date(b.date);
        } else if (sortOrder === "az") {
            return a.title.localeCompare(b.title);
        } else if (sortOrder === "za") {
            return b.title.localeCompare(a.title);
        } else {
            return 0;
        }
    });

    // Pagination logic
    const totalPages = Math.ceil(sortedCourses.length / ITEMS_PER_PAGE);
    const displayedCourses = sortedCourses.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className="react-course-filter back__course__page_grid pb---40 pt---110">
            <div className="container pb---70">
                {/* Filter Section */}
                {/*<div className="row align-items-center back-vertical-middle shorting__course mb-50">*/}
                {/*    <div className="col-md-2">*/}
                {/*        <div className="all__icons">*/}
                {/*            <div className="list__icons">*/}
                {/*                <svg*/}
                {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                {/*                    width="24"*/}
                {/*                    height="24"*/}
                {/*                    viewBox="0 0 24 24"*/}
                {/*                    fill="none"*/}
                {/*                    stroke="currentColor"*/}
                {/*                    strokeWidth="2"*/}
                {/*                    strokeLinecap="round"*/}
                {/*                    strokeLinejoin="round"*/}
                {/*                    className="feather feather-sliders"*/}
                {/*                >*/}
                {/*                    <line x1="4" y1="21" x2="4" y2="14"></line>*/}
                {/*                    <line x1="4" y1="10" x2="4" y2="3"></line>*/}
                {/*                    <line x1="12" y1="21" x2="12" y2="12"></line>*/}
                {/*                    <line x1="12" y1="8" x2="12" y2="3"></line>*/}
                {/*                    <line x1="20" y1="21" x2="20" y2="16"></line>*/}
                {/*                    <line x1="20" y1="12" x2="20" y2="3"></line>*/}
                {/*                    <line x1="1" y1="14" x2="7" y2="14"></line>*/}
                {/*                    <line x1="9" y1="8" x2="15" y2="8"></line>*/}
                {/*                    <line x1="17" y1="16" x2="23" y2="16"></line>*/}
                {/*                </svg>*/}
                {/*            </div>*/}
                {/*            <div className="result-count">Filters</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="col-md-10 text-right">*/}
                {/*        <select className="from-control category" onChange={handleChangeCategory}>*/}
                {/*            <option value="All">All Categories</option>*/}
                {/*            <option value="Academics">Academics</option>*/}
                {/*            <option value="Sports">Sports</option>*/}
                {/*            <option value="Arts &amp; Culture">Arts &amp; Culture</option>*/}
                {/*            <option value="Technology">Technology</option>*/}
                {/*            <option value="Clubs &amp; Societies">Clubs &amp; Societies</option>*/}
                {/*            <option value="Workshops &amp; Seminars">Workshops &amp; Seminars</option>*/}
                {/*            <option value="Competitions">Competitions</option>*/}
                {/*            <option value="Community Service">Community Service</option>*/}

                {/*        </select>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/* Result Count Section */}
                <div className="row align-items-center back-vertical-middle shorting__course2 mb-50">
                    <div className="col-md-6">
                        <div className="all__icons">
                            <div className="result-count">
                                We found {displayedCourses.length} course(s) available for you
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">
                        <select className="from-control" onChange={handleSortChange}>
                            <option value={"latest"}>Sort by: Default</option>
                            {/*<option>Sort by popularity</option>*/}
                            {/*<option>Sort by average rating</option>*/}
                            <option value={"latest"}>Sort by latest</option>
                            <option value={"oldest"}>Sort by oldest</option>
                            <option value={"az"}>Sort by Name: A to Z</option>
                            <option value={"za"}>Sort by Name: Z to A</option>
                            {/*<option>Sort by price: high to low</option>*/}
                        </select>
                    </div>
                </div>

                {/* Course Grid Section */}
                <div className="row">
                    {displayedCourses.map((data, index) => (
                        <div key={index} className="col-lg-4">
                            <SingleTeacherTrainingList
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
                    <li className="back-next">
                        <Link to="#" onClick={() => setCurrentPage(currentPage - 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="feather feather-arrow-left">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </Link>
                    </li>

                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <Link to={"#"} className="page-link" onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                            </Link>
                        </li>
                    ))}
                    <li className="back-next">
                        <Link to="#" onClick={() => setCurrentPage(currentPage + 1)}>
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

export default TeacherTrainingsGrid;