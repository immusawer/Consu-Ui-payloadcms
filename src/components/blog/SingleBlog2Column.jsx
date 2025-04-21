import { HashLink as Link } from 'react-router-hash-link'
import React from 'react';

const SingleBlog2Column = ({ blog }) => {
    const { id, thumb, date, author, authorIcon, title, btnIcon, btnText } = blog

    return (
        <>
            <div className="blog-style-one">
                <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/${id}#`}>
                        <img src={`/assets/img/blog/${thumb}`} alt="Thumb" />
                    </Link>
                </div>
                <div className="info">
                    <div className="blog-meta">
                        <ul>
                            <li>
                                <i className={authorIcon}></i>
                                <Link to="#">{author}</Link>
                            </li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h3>
                        <Link to={`/blog-single-with-sidebar/${id}#`}>{title}</Link>
                    </h3>
                    <Link to={`/blog-single-with-sidebar/${id}#`} className="btn-simple"><i className={btnIcon}></i>{btnText}</Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlog2Column;