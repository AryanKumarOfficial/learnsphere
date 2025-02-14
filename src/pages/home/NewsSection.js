import React from 'react';

import SectionTitle from '../../components/SectionTitle'
import SinglePost from '../../components/Blog/SinglePost';

import posts from '../../data/Posts.json';

const News = () => {

    return (
        <>
            <div className="react-blog__area blog__area pt---120 pb---120 graybg-home">
                <div className="container blog__width">
                    <SectionTitle Title="News and Achievements"/>
                    <div className="row">
                        {posts.map((data, index) => {
                            return (
                                <div key={index}
                                     className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 wow animate__fadeInUp"
                                     data-wow-duration="0.3s">
                                    {
                                        <SinglePost
                                            blogID={data.id}
                                            blogImage={`${data.image}`}
                                            blogTitle={data.title}
                                            blogAuthor={data.author}
                                            blogPublishedDate={data.publishedDate}
                                            blogCategory={data.category}
                                        />
                                    }

                                </div>
                            )
                        }).slice(0, 4)}
                    </div>
                </div>
            </div>
        </>
    );

}

export default News;