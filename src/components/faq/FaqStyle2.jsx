import React from 'react';
import Faq1Data from '@/assets/jsonData/faq/Faq1Data.json'
import SingleFaq1 from './SingleFaq1';
import { HashLink as Link } from 'react-router-hash-link';

const FaqStyle2 = () => {
    return (
        <>
            <div className="faq-area bg-gray default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-md-30 mb-xs-30">
                            <div className="faq-sidebar">
                                <div className="faq-sidebar-item bg-theme text-light" style={{ backgroundImage: `url(/assets/img/shape/map-light.png)` }}>
                                    <h4>Need Help?</h4>
                                    <ul>
                                        <li><Link to="#">Business Policy</Link></li>
                                        <li><Link to="#">Marketing strategy</Link></li>
                                        <li><Link to="#">Customer Benefits</Link></li>
                                        <li><Link to="#">Profit Sharing</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 faq-style-one dark pl-50 pl-md-15 pl-xs-15">
                            <h2 className="title mb-40">You need to know <br /> before begin everything.</h2>
                            <div className="accordion" id="faqAccordion">
                                {Faq1Data.map(faq =>
                                    <SingleFaq1 faq={faq} key={faq.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqStyle2;