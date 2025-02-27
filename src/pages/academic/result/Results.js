import React, {useState} from "react";
import {Link} from "react-router-dom";
import SingleResultList from "./ResultsThree";
import {results} from "../../../data/results";

const ITEMS_PER_PAGE = 6;

const ResultsGrid = () => {
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

    const filteredCourses = category === "all" ? results : results.filter((course) =>
        course.stream && course.stream.toLowerCase().includes(category)
    );

    const sortedCourses = [...filteredCourses].sort((a, b) => {
        if (sortOrder === "latest") {
            return new Date(b.date) - new Date(a.date);
        } else if (sortOrder === "oldest") {
            return new Date(a.date) - new Date(b.date);
        } else if (sortOrder === "az") {
            return a.name.localeCompare(b.name);
        } else if (sortOrder === "za") {
            return b.name.localeCompare(a.name);
        } else {
            return 0;
        }
    });

    const totalPages = Math.ceil(sortedCourses.length / ITEMS_PER_PAGE);
    const displayedCourses = sortedCourses.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

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
                            <option value="All">All Categories</option>
                            {["Science", "Commerce", "Middle School", "High School", "Arts"].map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}

                        </select>
                    </div>
                </div>
                <div className="row align-items-center back-vertical-middle shorting__course2 mb-50">
                    <div className="col-md-6">
                        <div className="all__icons">
                            <div className="result-count">
                                We found {displayedCourses.length} result(s) available for you
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">
                        <select className="from-control" onChange={handleSortChange}>
                            <option value="latest">Sort by: Default</option>
                            <option value="latest">Sort by latest</option>
                            <option value="oldest">Sort by oldest</option>
                            <option value="az">Sort by Name: A to Z</option>
                            <option value="za">Sort by Name: Z to A</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    {displayedCourses.map(({
                                               id,
                                               name,
                                               stream,
                                               rollNo,
                                               classLevel,
                                               grade,
                                               marks,
                                               percentage,
                                               date,
                                               image
                                           }, index) => (
                        <div key={index} className="col-lg-4">
                            <SingleResultList
                                id={id}
                                name={name}
                                stream={stream}
                                rollNo={rollNo}
                                classLevel={classLevel}
                                grade={grade}
                                marks={marks}
                                percentage={percentage}
                                date={date}
                                image={image}
                            />
                        </div>
                    ))}
                </div>

                <ul className="back-pagination pt---20">
                    {currentPage > 1 && (
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
                    )}

                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <Link to="#" className="page-link" onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                            </Link>
                        </li>
                    ))}

                    {currentPage < totalPages && (
                        <li className="back-next">
                            <Link to="#" onClick={() => setCurrentPage(currentPage + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ResultsGrid;