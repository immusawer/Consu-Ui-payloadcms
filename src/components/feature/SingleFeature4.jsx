import { HashLink as Link } from 'react-router-hash-link'
import React from 'react';

const SingleFeature4 = ({ feature }) => {
    const { icon, title, text } = feature

    return (
        <>
            <div className="feature-style-four">
                <img src={`/assets/img/icon/${icon}`} alt="Image Not Found" />
                <h4><Link to="#" >{title}</Link></h4>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleFeature4;