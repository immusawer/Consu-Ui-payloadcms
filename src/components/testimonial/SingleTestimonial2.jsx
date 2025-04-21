import React from 'react';
import RatingsStar from '../utilities/RatingsStar';

const SingleTestimonial2 = ({ testimonial }) => {
    const { quoteThumb, ratings, title, text, name, location, logo } = testimonial

    return (
        <>
            <div className="swiper-slide">
                <div className="testimonial-style-two">
                    <img src={`/assets/img/shape/${quoteThumb}`} alt="Quote" />
                    <div className="top-info">
                        <h3>{title}</h3>
                        <div className="testimonial-rating">
                            <RatingsStar ratings={ratings} />
                        </div>
                    </div>
                    <div className="info">
                        <p>{text}</p>
                    </div>
                    <div className="provider">
                        <div className="content">
                            <h4>{name}</h4>
                            <span>{location}</span>
                        </div>
                        <div className="thumb">
                            <img src={`/assets/img/logo/${logo}`} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonial2;