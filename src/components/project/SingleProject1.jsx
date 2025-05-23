import { HashLink as Link } from 'react-router-hash-link'
import React from 'react';

const SingleProject1 = ({ project }) => {
    const { id, thumb, tag, title, text, btnText } = project

    return (
        <>
            <div className="swiper-slide">
                <div className="project-style-one">
                    <div className="row align-bottom">
                        <div className="col-lg-7 pr-0 pr-md-15 pr-xs-15 pl-md-15 pl-xs-15">
                            <div className="thumb">
                                <img src={`/assets/img/projects/${thumb}`} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-5 pl-0 pl-md-15 pl-xs-15 pr-md-15 pr-xs-15">
                            <div className="info">
                                <span>{tag}</span>
                                <h3><Link to={`/project-details/${id}#`}>{title}</Link></h3>
                                <p>{text}</p>
                                <Link className="btn-animation dark mt-10" to={`/project-details/${id}#`}>
                                    <i className="fas fa-arrow-right"></i> <span>{btnText}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProject1;