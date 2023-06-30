import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '../components';

export const RegisterPage = () => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');

    return <> 
        <div className="container-fluid">  
            <div className="navbar navbar-expand-lg mx-5 py-2 p-2 mb-3 bg-success" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active"><a href="/" className="text-decoration-none text-white bg-light-xl"> MyLibraryWebApp</a></li>
                    <li className="breadcrumb-item active text-white" aria-current="page"> Register </li>
                </ol>
            </div>

            <h1 className="display-4 text-center"> Register </h1>

            <div className="mx-5">

                <TextField 
                    id="firstName_field"
                    label="First Name"
                    placeHolder="Enter first name" 
                    input_className="form-control "                
                    value={firstName} 
                    setValue={setFirstName}
                />

                <TextField 
                    id="lastName_field"
                    label="Last Name"
                    placeHolder="Enter last name" 
                    input_className="form-control"                
                    value={lastName} 
                    setValue={setLastName}
                />

                <TextField 
                    id="email_field"
                    label="Email"
                    placeHolder="Enter email" 
                    input_className="form-control"                
                    value={email} 
                    setValue={setEmail}
                />

                <TextField 
                    id="password_field"
                    label="Password"
                    placeHolder="Password"
                    input_className="form-control"  
                    value={password} 
                    setValue={setPassword}
                />
                <div className="text-center d-grid gap-4 mx-auto">
                    <Link to="/"> 
                        <button type="button" className="btn btn-outline-primary btn-lg col-2"> Sign up </button>
                    </Link>

                    <Link to="/">
                        <button type="button" className="btn btn-outline-danger btn-lg col-2"> Back </button>
                    </Link>
                </div>
            </div>
        </div>
    </>;
}