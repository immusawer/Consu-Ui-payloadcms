import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleBanner1 = ({ banner }) => {
    const { bgThumb, title, title1, title2, shapeThumb, btnText } = banner

    return (
        <>
            <div className="banner-thumb bg-cover shadow dark" style={{ backgroundImage: `url(assets/img/banner/${bgThumb})` }}></div>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-7 offset-xl-5">
                        <div className="content">
                            <h4>{title}</h4>
                            <h2><strong>{title1}</strong> {title2}</h2>
                            <div className="button mt-40">
                                <Link className="btn-animation" to="/services#"><i className="fas fa-arrow-right"></i> <span>{btnText}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-bg">
                <img src={`/assets/img/shape/${shapeThumb}`} alt="Shape" />
            </div>
        </>
    );
};

export default SingleBanner1;