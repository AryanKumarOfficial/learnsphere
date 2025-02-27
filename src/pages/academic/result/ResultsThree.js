import React from 'react';
import {Link} from 'react-router-dom';

const SingleResultList = (props) => {
    const {id, name, stream, rollNo, classLevel, grade, marks, percentage, date, image} = props;
    const [src, setSrc] = React.useState(image);

    return (
        <div className="single-studies grid-item">
            <div className="single-studies col-lg-12 grid-item">
                <div className="inner-course">
                    <div className="case-img" style={{height: "200px", overflow: "hidden"}}>
                        <Link to="#" className="cate-w">{stream ? stream : 'Primary'}</Link>
                        <img
                            src={src}
                            onError={() => setSrc("https://images.pexels.com/photos/257970/pexels-photo-257970.jpeg?w=500&h=500")}
                            alt={name ? name : 'Primary'}
                            style={{width: "100%", height: "100%", objectFit: "cover"}}
                        />
                    </div>
                    <div className="case-content">
                        <ul className="meta-course">
                            <li></li>
                        </ul>
                        <h4 className="case-title text-truncate fw-bold">
                            <Link to={`#`}>
                                {name ? name : 'John Doe'}
                            </Link>
                        </h4>
                        <div className="react__user">
                            <p className="react__user__text text-truncate mb-0">
                                <strong className={"mr-10"}>Roll No:</strong> {rollNo ? rollNo : '123456'}
                            </p>
                            <p className="react__user__text text-truncate mb-0">
                                <strong className={"mr-10"}>Class:</strong> {classLevel ? classLevel : '1'}
                            </p>
                            <p className="react__user__text text-truncate mb-0">
                                <strong className={"mr-10"}>Grade:</strong> <span
                                className={"text-success"}>{grade ? grade : 'Z+'}</span>
                            </p>
                            <p className="react__user__text text-truncate mb-0">
                                <strong className={"mr-10"}>Marks Obtained:</strong> {marks ? marks : '100'}
                            </p>
                            <p className="react__user__text text-truncate mb-0">
                                <strong className={"mr-10"}>Percentage:</strong> {percentage ? percentage : '100'}%
                            </p>
                        </div>
                        <ul className="react-ratings">
                            <li className="react-book" style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                width: "100%"
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-calendar">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                {new Date(date ? date : '1st Jan, 2021').toLocaleDateString("en-IN", {
                                    year: 'numeric', month: 'short', day: 'numeric'
                                })}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleResultList;
