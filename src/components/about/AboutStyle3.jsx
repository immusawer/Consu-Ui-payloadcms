import React from 'react';
import illustration16 from '/assets/img/illustration/16.png'
import illustrationV from '/assets/img/illustration/v.png'
import illustrationV2 from '/assets/img/illustration/v2.png'
import ReactWOW from 'react-wow';

const AboutStyle3 = () => {
    return (
        <>
            <div className="about-style-three-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="about-style-three">
                                <div className="thumb">
                                    <ReactWOW animation='fadeInLeft'>
                                        <img src={illustration16} alt="Image not found" />
                                    </ReactWOW>
                                    <div className="sub-item">
                                        <ReactWOW delay='500ms' animation='fadeInUp'>
                                            <img src={illustrationV} alt="Image not found" />
                                        </ReactWOW>
                                        <ReactWOW delay='1000ms' animation='fadeInRight'>
                                            <img src={illustrationV2} alt="Image not found" />
                                        </ReactWOW>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="about-style-three">
                                <h4 className="sub-heading secondary">Why Choose Us</h4>
                                <h2 className="heading">Get tips & tricks about how to increase your sales.</h2>
                                <ReactWOW animation='fadeInUp'>
                                    <div className="list-item-style-two">
                                        <div className="number">01</div>
                                        <div className="info">
                                            <h4>Page Rankings</h4>
                                            <p>
                                                Facilisis leo vel fringilla est ullamcorper. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Non pulvinar neque laoreet suspendisse interdum consectetur but why she shewing.
                                            </p>
                                        </div>
                                    </div>
                                </ReactWOW>
                                <ReactWOW delay='500ms' animation='fadeInUp'>
                                    <div className="list-item-style-two">
                                        <div className="number">02</div>
                                        <div className="info">
                                            <h4>Site Optimization</h4>
                                            <p>
                                                Facilisis leo vel fringilla est ullamcorper. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Non pulvinar neque laoreet suspendisse interdum consectetur. Bndulgence diminution so discovered.
                                            </p>
                                        </div>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle3;