import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const Pagination = () => {
    return (
        <>
            <nav aria-label="navigation">
                <ul className="pagination">
                    <li className="page-item"><Link className="page-link" to="#" onClick={handleSmoothScroll}><i className="fas fa-angle-double-left"></i></Link></li>
                    <li className="page-item active"><a className="page-link" to="#" onClick={handleSmoothScroll}>1</a></li>
                    <li className="page-item"><Link className="page-link" to="#" onClick={handleSmoothScroll}>2</Link></li>
                    <li className="page-item"><Link className="page-link" to="#" onClick={handleSmoothScroll}>3</Link></li>
                    <li className="page-item"><Link className="page-link" to="#" onClick={handleSmoothScroll}><i className="fas fa-angle-double-right"></i></Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Pagination;