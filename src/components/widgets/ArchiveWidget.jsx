import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ArchiveWidget = () => {
    return (
        <>
            <div className="sidebar-item archives">
                <h4 className="title">Archives</h4>
                <div className="sidebar-info">
                    <ul>
                        <li><Link to="#">Aug 2023</Link></li>
                        <li><Link to="#">Sept 2023</Link></li>
                        <li><Link to="#">Nov 2023</Link></li>
                        <li><Link to="#">Dec 2023</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ArchiveWidget;