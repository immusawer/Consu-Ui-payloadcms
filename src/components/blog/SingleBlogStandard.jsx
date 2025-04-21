
import { HashLink as Link } from 'react-router-hash-link'
import React from 'react';

const SingleBlogStandard = ({ blog }) => {
    const { id, date, dateIcon, author, authorIcon, title, thumbFull, text, btnText } = blog

    return (
        <>
            <div className="item">
                <div className="thumb">
                    <Link to={`/blog-single/${id}#`}>
                        <img src={`/assets/img/blog/${thumbFull}`} alt="Thumb" />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li>
                                <Link to="#" ><i className={dateIcon}></i> {date}</Link>
                            </li>
                            <li>
                                <Link to="#" ><i className={authorIcon}></i> {author}</Link>
                            </li>
                        </ul>
                    </div>
                    <h2><Link to={`/blog-single/${id}#`}>{title}</Link></h2>
                    <p>{text}</p>
                    <Link className="btn mt-10 btn-md circle btn-theme animation" to={`/blog-single/${id}#`}>{btnText}</Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogStandard;