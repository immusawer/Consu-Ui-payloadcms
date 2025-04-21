import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleServices1 = ({ data }) => {
    const { id, icon, title, text } = data

    return (
        <>
            <div className="services-style-one">
                <i className={icon}></i>
                <h4><Link to={`/services-details/${id}#`}>{title}</Link></h4>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleServices1;