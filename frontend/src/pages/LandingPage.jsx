import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return <>
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg mx-5 py-3 p-2 mb-3 bg-dark" aria-label="breadcrumb">
                <a className="text-decoration-none text-white center" href='/'> MyLibraryWebApp</a>
            </nav>

            <div className="jumbotron-fluid mx-5 bg-light" style={{height: '350px'}}>
                <h1 className="display-4 text-center"> My Library WebApp </h1>
                <p className="lead"> Welcome to My Library WebApp, a personal project meant to sharpen my skills in back-end and front-end 
                                     development while mixing my love for literature. Login or Register to create your personal library!
                </p>
            </div>

            <div className="text-center d-grid gap-4 mx-auto">
                <Link to="/login">
                    <button type="button" className="btn btn-outline-primary btn-lg col-3"> Login </button>
                </Link>
                
                <Link to="/register">
                    <button type="button" className="btn btn-outline-success btn-lg col-3"> Register </button>
                </Link>
            </div>
        </div>
    </>;
}