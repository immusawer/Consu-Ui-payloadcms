import React from 'react';
import illustration7 from '/assets/img/illustration/7.png'
import { HashLink as Link } from 'react-router-hash-link'
import ReactWOW from 'react-wow';

const BannerStyle4 = () => {
    return (
        <>
            <div className="banner-style-four-area text-light bg-cover" style={{ backgroundImage: `url(/assets/img/shape/banner-2.jpg)` }}>
                <div className="banner-style-four">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information">
                                        <ReactWOW delay="500ms" duration="400ms" animation='fadeInUp'>
                                            <h2>
                                                Grow business <br />with great <span className="relative">advice</span>
                                            </h2>
                                        </ReactWOW>
                                        <ReactWOW delay="900ms" duration="400ms" animation='fadeInUp'>
                                            <p>
                                                Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.
                                            </p>
                                        </ReactWOW>
                                        <ReactWOW delay="1200ms" duration="400ms" animation='fadeInUp'>
                                            <div className="button mt-30">
                                                <Link className="btn-animation" to="/services#"><i className="fas fa-arrow-right"></i> <span>Our Services</span></Link>
                                            </div>
                                        </ReactWOW>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <img src={illustration7} alt="Thumb" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerStyle4;