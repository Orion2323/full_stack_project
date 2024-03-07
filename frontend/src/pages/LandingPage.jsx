import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { LogIn } from 'react-feather'

export const LandingPage = () => {
    const navigate = useNavigate();

    return <>
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg mx-5 py-3 p-2 mb-3 bg-success" aria-label="breadcrumb">
                <a className="text-decoration-none text-white" href='/'> MyLibraryWebApp</a>
            </nav>

            <div className="jumbotron-fluid mx-5 px-5" >
                <h1 className="display-4 text-center"> My Library WebApp </h1>
                <p className="lead"> Welcome to My Library WebApp, a personal project meant to sharpen my skills in back-end and front-end 
                                     development while mixing my love for literature. Since I have a lot of books, I fugured I could make a digital
                                     library that keep track of the books I currently have and whether I have read them, and a wishlist of books
                                     that I want. With that being said, Login or Register to create your personal library!
                </p>
            </div>

            <div className="container text-center">
                <div className="row"></div>
                <div className='row'>
                    <button 
                        type="button" 
                        className="btn btn-outline-primary btn-lg col-3" 
                        onClick={() => navigate("/login")}> 
                        Login 
                    </button>

                    <button 
                        type="button" 
                        className="btn btn-outline-success btn-lg col-3" 
                        onClick={() => navigate("/register")}> 
                        Register 
                    </button>

                </div>
            </div>
        </div>
    </>;
}