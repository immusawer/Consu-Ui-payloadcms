import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';

const SingleBlog2 = ({ blog }) => {
    const { id, blogClass, thumb, badge, date, author, title, text } = blog

    return (
        <>
            <div className={`blog-style-one solid ${blogClass}`}>
                <div className="thumb">
                    <img src={`/assets/img/blog/${thumb}`} alt="Image Not Found" />
                    <div className="tags"><Link to="#" >{badge}</Link></div>
                    <div className="info">
                        <div className="blog-meta">
                            <ul>
                                <li>
                                    <Link to="#" ><i className="fas fa-user"></i> {author}</Link>
                                </li>
                                <li>{date}</li>
                            </ul>
                        </div>
                        <h4>
                            <Link to={`/blog-single-with-sidebar/${id}#`}>{title}</Link>
                        </h4>
                        <p>{[text]}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog2;