import React from 'react';
import {Link} from 'react-router-dom';
import {schoolManagingCommittee} from '../../../data/committees';

const Members = () => {
    return (<>

            <div className="container d-flex flex-column align-items-center mb---50 mt---50 justify-content-center">
                <h2 className="wow animate__fadeInUp fs-1 fw-bold mb-2 lh-base" data-wow-duration="0.3s"
                    style={{color: "#D2093C"}}>
                    School Managing Committee
                </h2>
                <h6 className="wow animate__fadeInUp fs-5 lh-sm fw-bold m-0 text-dark" data-wow-duration="0.3s">
                    Committed to building a strong foundation for success
                </h6>
            </div>
            <div className="instructor__area pt-115 pb-85 text-center">
                <div className="container">
                    <div className="row">
                        {schoolManagingCommittee.map((data, index) => (
                            <div key={data.id} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="instructor__content">
                                    <div className="instructor__content-1">
                                        <img src={data.image} alt={data.name || 'Member'}/>
                                    </div>
                                    <div className="instructor__content-2">
                                        <h4>
                                            <Link to={`/school-committee/${data.id}`}>{data.name}</Link>
                                        </h4>
                                        <p>{data.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Members;
