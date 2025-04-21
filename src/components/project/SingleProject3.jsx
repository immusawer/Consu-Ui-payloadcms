import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleProject3 = ({ project }) => {
    const { thumb, icon, tags, title } = project

    return (
        <>
            <div className="gallery-item">
                <div className="gallery-style-three">
                    <div className="thumb">
                        <img src={`/assets/img/gallery/${thumb}`} alt="Thumb" />
                        <Link to="#" className="item popup-gallery" >
                            <PhotoView src={`/assets/img/gallery/${thumb}`} alt="image">
                                <span>
                                    <i className={icon}></i>
                                </span>
                            </PhotoView>
                        </Link>
                    </div>
                    <div className="overlay">
                        <div className="content">
                            <span>{tags}</span>
                            <h4><Link to="#">{title}</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProject3;