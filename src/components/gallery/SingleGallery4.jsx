import React from 'react';
import { Link } from 'react-router-dom';

const SingleGallery4 = ({ gallery }) => {
    const { thumb, title, subTitle } = gallery

    return (
        <>
            <div className="swiper-slide">
                <div className="gallery-style-four">
                    <img src={`/assets/img/portfolio/${thumb}`} alt="Image not Found" />
                    <div className="overlay">
                        <h4><Link to="#" >{title}</Link></h4>
                        <span>{subTitle}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleGallery4;