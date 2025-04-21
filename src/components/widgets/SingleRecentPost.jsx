import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';

const SingleRecentPost = ({ blog }) => {
    const { id, thumbFull, title, date } = blog

    const truncateString = (str) => {
        if (str.length <= 30) {
            return str;
        }
        return `${str.slice(0, 30)} ...`;
    };

    const truncatedTitle = truncateString(title);

    return (
        <>
            <li>
                <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/${id}#`}>
                        <img src={`/assets/img/blog/${thumbFull}`} alt="Thumb" />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta-title">
                        <span className="post-date">{date}</span>
                    </div>
                    <Link to={`/blog-single-with-sidebar/${id}#`}>{truncatedTitle}</Link>
                </div>
            </li>
        </>
    );
};

export default SingleRecentPost;