import React from 'react';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';

const About1Card = () => {
    return (
        <>
            <ReactWOW animation='fadeInUp' delay="500ms">
                <div className="about-card">
                    <ul>
                        <li>
                            <div className="icon">
                                <i className="flaticon-license"></i>
                            </div>
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer">
                                        <CountUp enableScrollSpy end={98} delay={1} duration={2} /></div>
                                    <div className="operator">%</div>
                                </div>
                                <span className="medium">Consulting Success</span>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="flaticon-global"></i>
                            </div>
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer">  <CountUp enableScrollSpy end={120} delay={1} duration={2} /></div>
                                    <div className="operator">+</div>
                                </div>
                                <span className="medium">Worldwide Clients</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </ReactWOW>
        </>
    );
};

export default About1Card;