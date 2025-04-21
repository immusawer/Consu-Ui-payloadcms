import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';

const SingleOverViewTab = ({ software }) => {
    const { activeClass, tabId, tabLabel, thumb, title, text } = software

    return (
        <>
            <div className={`tab-pane fade ${activeClass}`} id={tabId} role="tabpanel" aria-labelledby={tabLabel}>
                <div className="soft-overview">
                    <img src={`/assets/img/dashboard/${thumb}`} alt="Image not found" />
                    <div className="overlay">
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <Link to="#"><i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleOverViewTab;