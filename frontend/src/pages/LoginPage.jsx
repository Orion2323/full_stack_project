import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '../components';
import UserAPIs from "../api/userApi.js";

export const LoginPage = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');

    const navigate = useNavigate();

    return <> 
        <div className="container-fluid">  
            <div className="navbar navbar-expand-lg mx-5 py-2 p-2 mb-3 bg-success" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active"><a href="/" className="text-decoration-none text-white bg-light-xl"> MyLibraryWebApp</a></li>
                    <li className="breadcrumb-item active text-white" aria-current="page">Login</li>
                </ol>
            </div>

            <h1 className="display-4 text-center"> Login </h1>

            <div className="mx-5">
                <TextField 
                    id="email_field"
                    label="Email"
                    placeHolder="Enter email" 
                    input_className="form-control"                
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField 
                    id="password_field"
                    label="Password"
                    placeHolder="Password"
                    input_className="form-control"  
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="text-center d-grid gap-4 mx-auto">
                    <Link to="/">
                        <button type="button" className="btn btn-outline-primary btn-lg col-2"> Log in </button>
                    </Link>

                    <Link to="/">
                        <button type="button" className="btn btn-outline-danger btn-lg col-2"> Back </button>
                    </Link>
                </div>
            </div>
        </div>
    </>;
}