import { HashLink as Link } from 'react-router-hash-link'
import React from 'react';

const SingleServices4 = ({ service }) => {
    const { id, title, text, icon, btnText, thumb } = service

    return (
        <>
            <div className="service-style-four">
                <div className="info">
                    <h4><Link to={`/services-details/${id}#`}>{title}</Link></h4>
                    <p>{text}</p>
                    <div className="icon">
                        <div className="thumb">
                            <img src={`/assets/img/icon/${icon}`} alt="Image Not Found" />
                        </div>
                        <Link to={`/services-details/${id}#`} className="link">{btnText} <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="thumb">
                    <img src={`/assets/img/service/${thumb}`} alt="Image Not Found" />
                </div>
            </div>
        </>
    );
};

export default SingleServices4;