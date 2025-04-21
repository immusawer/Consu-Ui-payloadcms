import React from 'react';
import logo from '/assets/img/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const HeaderLogo = ({ openMenu }) => {
    return (
        <>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                    <i className="fa fa-bars"></i>
                </button>
                <Link className="navbar-brand" to="/#">
                    <img src={logo} className="logo" alt="Logo" />
                </Link>
            </div>
        </>
    );
};

export default HeaderLogo;