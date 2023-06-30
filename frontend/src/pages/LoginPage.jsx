import React, { useState, useEffect, useContext } from 'react';
import { TextField } from '../components';


export const LoginPage = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');

    return <> 
        <div className="container-fluid">  
            <div className="navbar navbar-expand-lg py-2 p-2 bg-success mx-5" aria-label="breadcrumb">
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
                <div className="text-center">
                    <button type="button" className="btn btn-outline-primary btn-lg col-2"> Submit </button>
                </div>
            </div>
        </div>
    </>;
}