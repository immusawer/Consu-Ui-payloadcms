import { HashLink as Link } from 'react-router-hash-link'
import React from 'react';

const SingleServices2 = ({ service }) => {
    const { id, thumb, title, icon, text, btnText } = service

    return (
        <>
            <div className="services-style-two">
                <div className="thumb">
                    <img src={`/assets/img/service/${thumb}`} alt="Thumb" />
                    <div className="title">
                        <Link to={`/services-details/${id}#`}>
                            <i className={icon}></i>
                            <h4>{title}</h4>
                        </Link>
                    </div>
                </div>
                <div className="info">
                    <p>{text}</p>
                    <div className="button">
                        <Link to={`/services-details/${id}#`}>{btnText}</Link>
                        <div className="devider"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServices2;