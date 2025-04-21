import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';
import SocialShareStyle3 from '../utilities/SocialShareStyle3';

const SingleTeam2 = ({ team }) => {
    const { id, memberThumb, name, designation } = team

    return (
        <>
            <div className="team-style-two">
                <div className="thumb">
                    <img src={`/assets/img/team/${memberThumb}`} alt="Thumb" />
                    <ul className="social">
                        <SocialShareStyle3 />
                    </ul>
                </div>
                <div className="info">
                    <div className="content">
                        <h4 className="title"><Link to={`/team-details/${id}#`}>{name}</Link></h4>
                        <span>{designation}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeam2;