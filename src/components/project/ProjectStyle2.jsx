import React from 'react';
import ProjectTitle from './ProjectTitle';
import { HashLink as Link } from 'react-router-hash-link'
import IsotopeGallery from './IsotopeGallery';

const ProjectStyle2 = ({ projectTitle }) => {
    return (
        <>
            <div className="project-style-two-area bg-gray default-padding">
                {projectTitle ? <ProjectTitle /> : <></>}
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 gallery-content">
                                <div className="magnific-mix-gallery gallery-masonary">
                                    <IsotopeGallery />
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <div className="load-more-info text-center mt-60">
                                            <p>
                                                Are you interested to show more portfolios? <Link to="#" >Load More</Link>
                                            </p>
                                        </div>
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

export default ProjectStyle2;