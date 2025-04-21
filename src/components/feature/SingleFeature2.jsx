import { HashLink as Link } from 'react-router-hash-link'
import React from 'react';

const SingleFeature2 = ({ feature }) => {
    const { icon, title, text } = feature

    return (
        <>
            <div className="feature-style-two">
                <img src={`/assets/img/icon/${icon}`} alt="Icon" />
                <h4><Link to="#" >{title}</Link></h4>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleFeature2;