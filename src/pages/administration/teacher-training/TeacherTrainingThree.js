import React from 'react';
import {Link} from 'react-router-dom';

const SingleTeacherTrainingList = (props) => {
    const {id, image, title, description, date, category} = props;
    const [src, setSrc] = React.useState(image);

    return (
        <div className="single-studies grid-item">
            <div className="single-studies col-lg-12 grid-item">
                <div className="inner-course">
                    <div className="case-img" style={{height: "200px", overflow: "hidden"}}>
                        <Link to="#" className="cate-w">{category ? category : 'General'}</Link>
                        <img
                            src={src}
                            onError={() => setSrc("https://images.pexels.com/photos/257970/pexels-photo-257970.jpeg?w=500&h=500")}
                            alt={title}
                            style={{width: "100%", height: "100%", objectFit: "cover"}}
                        />
                    </div>
                    <div className="case-content">
                        <ul className="meta-course">
                            <li></li>
                        </ul>
                        <h4 className="case-title text-truncate">
                            <Link to={`/more/school-activities/${id}`}>
                                {title ? title : 'The Most Complete Design Thinking Course On The Market.'}
                            </Link>
                        </h4>
                        <div className="react__user">
                            <p className="react__user__text text-truncate">
                                {description ? description : 'This course is designed to help you understand the world of design and how to use it to your advantage.'}
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

export default SingleTeacherTrainingList;
