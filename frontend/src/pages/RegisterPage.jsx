import React, { useState, useEffect, useContext, FormEvent} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Box, Button, Container, FormHelperText, TextField, Typography, } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import UserAPI from "../api/userApi.js"

export const RegisterPage = () => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');
    const [ loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // call register API
        console.log("here")
        UserAPI.createUser(firstName, lastName, email, password).then(
            () => {
                //navigate("/")
                //window.location.reload();
            },
            (error) => {
                const reMessage = (
                    error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            }
        )

        setLoading(false)
    }

    return <> 
        <Container maxWidth="xs">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, }} >
                <Typography component="h1" variant="h5"> Register </Typography>
                    <Box component="form" onSubmit={handleSubmit} mt={3}>
                        <TextField label="First Name" margin="normal" required fullWidth autoComplete="name" onChange={(e) => setFirstName(e.target.value)} value={firstName} autoFocus />
                        <TextField label="Last Name" margin="normal" required fullWidth autoComplete="name" onChange={(e) => setLastName(e.target.value)} value={lastName} autoFocus />
                        <TextField label="Email" margin="normal" required fullWidth autoComplete="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <TextField label="Password" margin="normal" required fullWidth type="password" autoComplete="new-password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <LoadingButton type="submit" variant="contained" loading={loading} sx={{ mt: 4, mb: 3 }}>Register</LoadingButton>
                    </Box>
            </Box>
        </Container>
    </>;
}