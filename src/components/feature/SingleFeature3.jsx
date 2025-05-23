import React from 'react';

const SingleFeature3 = ({ feature }) => {
    const { thumb, title, text } = feature

    return (
        <>
            <div className="feature-style-three">
                <div className="thumb">
                    <img src={`/assets/img/about/${thumb}`} alt="Image Not Found" />
                </div>
                <div className="info">
                    <i className="fas fa-sack-dollar"></i>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SingleFeature3;