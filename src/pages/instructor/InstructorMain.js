import React from 'react';
import {Link} from 'react-router-dom'

import instructors from '../../data/Instructors.json';
import SectionTitle from "../../components/SectionTitle";

const InstructorMain = () => {

    return (
        <>
            <div className="instructors___page pt---120 pb---140">
                <div className="container pb---60">
                    <SectionTitle isDecoration={false} Title="Meet Our Professional"/>
                    <h2 className={"fw-bold text-center fs-4 text-danger"}>Our Professional Teachers</h2>
                    <div className="row">
                        {instructors.map((data, index) => {
                            return (
                                <div className="col-lg-3">
                                    <Link to={`/instructor/${data.id}`}>
                                        <div className="instructor__content">
                                            <div className="instructor__image">
                                                <img src={require(`../../assets/images/instructor/${data.image}`)}
                                                     alt={data.name}/>
                                                <div className="content__hover">
                                                    <p>{data.bio}</p>
                                                    <ul>
                                                        <li><a href="#"><span aria-hidden="true"
                                                                              className="social_facebook"></span></a>
                                                        </li>
                                                        <li><a href="#"><span aria-hidden="true"
                                                                              className="social_twitter"></span></a>
                                                        </li>
                                                        <li><a href="#"><span aria-hidden="true"
                                                                              className="social_linkedin"></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="bottom-content">
                                                <h4><Link to={`/instructor/${data.id}`}>{data.name}</Link></h4>
                                                <p>{data.designation}</p>
                                            </div>
                                        </div>
                                    </Link>
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