import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';
import ReactWOW from 'react-wow';

const SingleBlog1 = ({ blog }) => {
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="col-xl-4 col-md-6 mb-30" style={{ display: 'flex', padding: '15px' }}>
            <ReactWOW animation="fadeInUp" delay={blog.animationDelay || '300ms'}>
                <div 
                    className="blog-style-one" 
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        ':hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.12)'
                        }
                    }}
                >
                    <div className="thumb" style={{
                        height: '240px',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <Link to={`/blog-single-with-sidebar/${blog.slug}#`}>
                            <img 
                                src={blog.image?.url || `/assets/img/blog/${blog.thumb}`} 
                                alt={blog.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                    ':hover': {
                                        transform: 'scale(1.05)'
                                    }
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                right: '0',
                                height: '60px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)'
                            }}></div>
                        </Link>
                    </div>
                    <div className="info" style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '25px',
                        borderTop: '3px solid #4e54c8'
                    }}>
                        <div className="blog-meta" style={{ marginBottom: '10px' }}>
                            <ul style={{ 
                                margin: 0, 
                                padding: 0, 
                                listStyle: 'none',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <li style={{ 
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginRight: '15px',
                                    color: '#6c757d',
                                    fontSize: '14px'
                                }}>
                                    <i className="far fa-user-circle" style={{ 
                                        marginRight: '5px',
                                        color: '#4e54c8'
                                    }}></i>
                                    <Link to="#/blog-single-with-sidebar/" style={{ 
                                        color: '#6c757d',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s ease',
                                        ':hover': {
                                            color: '#4e54c8'
                                        }
                                    }}>
                                        {blog.author}
                                    </Link>
                                </li>
                                <li style={{ 
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#6c757d',
                                    fontSize: '14px'
                                }}>
                                    <i className="far fa-calendar-alt" style={{ 
                                        marginRight: '5px',
                                        color: '#4e54c8'
                                    }}></i>
                                    {formatDate(blog.date)}
                                </li>
                            </ul>
                        </div>
                        <h4 style={{
                            margin: '10px 0 15px',
                            flexGrow: 1,
                            fontSize: '20px',
                            lineHeight: '1.4',
                            fontWeight: '600'
                        }}>
                            <Link 
                                to={`/blog-single-with-sidebar/`}
                                style={{
                                    color: '#2c3e50',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease',
                                    ':hover': {
                                        color: '#4e54c8'
                                    }
                                }}
                            >
                                {blog.title}
                            </Link>
                        </h4>
                        <Link 
                            to={`/blog-single-with-sidebar/`} 
                            className="btn-simple"
                            style={{
                                marginTop: 'auto',
                                display: 'inline-flex',
                                alignItems: 'center',
                                color: '#4e54c8',
                                textDecoration: 'none',
                                fontWeight: '500',
                                transition: 'all 0.3s ease',
                                ':hover': {
                                    transform: 'translateX(5px)',
                                    color: '#2c3e50'
                                }
                            }}
                        >
                            Read More
                            <i className="fas fa-arrow-right" style={{ 
                                marginLeft: '8px',
                                transition: 'transform 0.3s ease'
                            }}></i>
                        </Link>
                    </div>
                </div>
            </ReactWOW>
        </div>
    );
};

export default SingleBlog1;