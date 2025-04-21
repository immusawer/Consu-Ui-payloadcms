import { HashLink as Link } from 'react-router-hash-link'
import React from 'react';
import ReactWOW from 'react-wow';

const SingleBlog1 = ({ blog }) => {
    const { id, thumb, date, animationDelay, author, title, btnText } = blog

    return (
        <>
            <div className="col-xl-4 col-md-6 mb-30">
                <ReactWOW animation="fadeInUp" delay={[animationDelay]}>
                    <div className="blog-style-one">
                        <div className="thumb">
                            <Link to={`/blog-single-with-sidebar/${id}#`}><img src={`/assets/img/blog/${thumb}`} alt="Thumb" /></Link>
                        </div>
                        <div className="info">
                            <div className="blog-meta">
                                <ul>
                                    <li>
                                        <span>By </span>
                                        <Link to="#" >{author}</Link>
                                    </li>
                                    <li>{date}</li>
                                </ul>
                            </div>
                            <h4>
                                <Link to={`/blog-single-with-sidebar/${id}#`}>{title}</Link>
                            </h4>
                            <Link to={`/blog-single-with-sidebar/${id}#`} className="btn-simple">
                                <i className="fas fa-angle-right"></i>{btnText}
                            </Link>
                        </div>
                    </div>
                </ReactWOW>
            </div>
        </>
    );
};

export default SingleBlog1;