import React from 'react';
import {Link} from 'react-router-dom'

import instructors from '../../data/Instructors.json';

const InstructorMain = () => {

    return (
        <>
            <div className="instructor__area pt---0 text-center" style={{
                display: "flex",
                "justifyContent": "end",
                width: "100%",
                textAlign: "right"
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-4 col-sm-6">
                            <div className="instructor__content instructor__content-one">
                                <div className="instructors_lefts text-right">
                                    <h6 className="wow animate__fadeInUp" data-wow-duration="0.3s" style={{
                                        color:"peru"
                                    }}>Committee</h6>
                                    <h2 className="wow animate__fadeInUp" data-wow-duration="0.5s">Meet Our Members</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="instructors___page pt---120 pb---140">

                <div className="container pb---60">
                    <div className="row">
                        {instructors.map((data, index) => {
                            return (
                                <div className="col-lg-3">
                                    <div className="instructor__content">
                                        <div className="instructor__image">
                                            <img src={require(`../../assets/images/instructor/${data.image}`)}
                                                 alt={data.name}/>
                                            <div className="content__hover">
                                                <p>{data.bio}</p>
                                                <ul>
                                                    <li><a href="#"><span aria-hidden="true"
                                                                          className="social_facebook"></span></a></li>
                                                    <li><a href="#"><span aria-hidden="true"
                                                                          className="social_twitter"></span></a></li>
                                                    <li><a href="#"><span aria-hidden="true"
                                                                          className="social_linkedin"></span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bottom-content">
                                            <h4><Link to={`/instructor/${data.id}`}>{data.name}</Link></h4>
                                            <p>{data.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }).slice(0, 8)}
                    </div>
                </div>
            </div>
        </>

    );
}


export default InstructorMain;