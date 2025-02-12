import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import SingleService from '../../components/Service/SingleService';
import services from '../../data/services.json';

const LatestServices = () => {
    return (
        <div className="react_popular_topics pt---100 pb---70">
            <div className="container">
                <SectionTitle Title="Our Latest Services"/>
                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.3s">
                            <SingleService
                                itemImg={service.image}
                                title={service.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestServices;
