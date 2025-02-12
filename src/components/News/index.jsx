import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle'

import SingleCourse from '../../components/Course/SingleCourse';


import news from '../../data/news.json';
import SingleNews from "./SingleNews";

const News = () => {

    return (

        <div className="popular__course__area pt---100 pb---100">
            <div className="container">
                <SectionTitle Title="News & Achievements"/>
                <div className="row">
                    {news.map((data, index) => {
                        return (
                            <div key={index}
                                 className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 wow animate__fadeInUp"
                                 data-wow-duration="0.3s">
                                {
                                    <SingleNews
                                        courseID={data.id}
                                        courseTitle={data.title}
                                        newsDescription={data.summary}
                                        newsDate={data.date}
                                        newsType={data.type}
                                    />
                                }

                            </div>
                        )
                    }).slice(0, 4)}
                </div>
                <div className="text-center">
                    <Link to="/news" className="view-courses"> View All News & Achievements <svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg></Link>
                </div>
            </div>
        </div>
    );
}

export default News;