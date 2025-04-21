import React from 'react';

const SingleFeature5 = ({ feature }) => {
    const { thumb, title, text } = feature

    return (
        <>
            <div className="feature-style-five">
                <div className="thumb">
                    <img src={`/assets/img/icon/${thumb}`} alt="Image Not Found" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleFeature5;