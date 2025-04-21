import { HashLink as Link } from 'react-router-hash-link'
import React from 'react';

const SingleBanner2 = ({ banner }) => {
    const { titleFirst, titleLast, text, btnText, shape, thumb } = banner

    return (
        <>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-7 col-lg-9">
                        <div className="content">
                            <h2>{titleFirst} <br /> {titleLast}</h2>
                            <p>{text}</p>
                            <div className="button">
                                <Link className="btn circle btn-theme btn-md radius animation" to="/contact-us#">{btnText}</Link>
                            </div>
                            <div className="shape-circle"></div>
                        </div>
                    </div>
                </div>
                <div className="banner-thumb">
                    <img src={`/assets/img/illustration/${thumb}`} alt="illustration" />
                </div>
            </div>
            <div className="banner-shape-right" style={{ background: `url(/assets/img/shape/${shape})` }}></div>
        </>
    );
};

export default SingleBanner2;