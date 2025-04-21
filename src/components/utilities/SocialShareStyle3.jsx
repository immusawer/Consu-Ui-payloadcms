import { HashLink as Link } from 'react-router-hash-link'
import React from 'react';

const SocialShareStyle3 = () => {
    return (
        <>
            <li className="facebook">
                <Link to="https://www.facebook.com/" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </Link>
            </li>
            <li className="twitter">
                <Link to="https://twitter.com/" target="_blank">
                    <i className="fab fa-twitter"></i>
                </Link>
            </li>
            <li className="linkedin">
                <Link to="https://www.linkedin.com/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            </li>
        </>
    );
};

export default SocialShareStyle3;