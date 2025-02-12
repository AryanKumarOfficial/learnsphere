import React from 'react';
import {Link} from 'react-router-dom';
import "../../assets/css/CurriculamGrid.css"

const singleCommunityThree = (props) => {
    const {id, image, title, description, date, category} = props;

    return (
        <div className="single-activity grid-item">
            <div className="activity-inner">
                <div className="activity-img">
                    <Link to={`/activity/${id}`}>
                        <img src={image} alt={title} className="w-full h-auto"/>
                    </Link>
                </div>
                <div className="activity-content p-4">
                    <h4 className="activity-title text-xl font-bold mb-2">
                        <Link to={`/activity/${id}`}>{title}</Link>
                    </h4>
                    <p className="activity-description text-gray-600 text-sm mb-4">
                        {description}
                    </p>
                    <div className="activity-meta flex justify-between text-xs text-gray-500">
            <span className="activity-date">
              {new Date(date).toLocaleDateString()}
            </span>
                        <span className="activity-category uppercase font-semibold">
              {category}
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default singleCommunityThree;
