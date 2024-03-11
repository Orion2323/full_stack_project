import React, { useState, useEffect, useContext, FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, FormHelperText, TextField, Typography, Grid, Link, Breadcrumbs } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import UserAPIs from "../api/userApi.js";

export const LoginPage = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');

    const [ message, setMessage ] = useState("");
    const [loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        setMessage("")
        setLoading(false)

        // call login API
        UserAPIs.loginUser(email, password).then(
            () => {
                navigate("/inner-home")
                // window.location.reload()
            },
            (error) => {
                const reMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                setMessage(reMessage)
                setLoading(false)
            }
        )
    }

    return <> 
        <Breadcrumbs separator='>' className='mx-5 py-3 p-2 mb-3' backgroundColor='green' aria-label='breadcrumb' flexDirection='column'>
            <Link underline='hover' href='/' color='black'> MyLibraryWebApp </Link>
            <Link underline='hover' href='/login' color='black'> Login </Link> 
        </Breadcrumbs>

       <Container maxWidth="xs">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, }} >
                <Typography component="h1" variant="h5"> Register </Typography>
                    <Box component="form" onSubmit={handleSubmit} mt={3}>
                        <TextField label="Email" margin="normal" required fullWidth autoComplete="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <TextField label="Password" margin="normal" required fullWidth type="password" autoComplete="new-password" onChange={(e) => setPassword(e.target.value)} value={password}/>

                        <Grid container spacing={1} columns={16} mt={5}>
                            <Grid item xs={8} alignItems='center' justifyContent='center' display='flex'>
                                <LoadingButton type="submit" color='primary' variant="contained" loading={loading} sx={{ mt: 4, mb: 3 }}> Login </LoadingButton>
                            </Grid>
                            <Grid item xs={8} alignItems='center' justifyContent='center' display='flex'>
                                <LoadingButton type="submit" color='error' variant="contained" loading={loading} onClick={() => navigate('/')}sx={{mt: 4, mb: 3}}> Cancel </LoadingButton>
                            </Grid>
                        </Grid>
                        <FormHelperText>{message}</FormHelperText>
                    </Box>
            </Box>
        </Container>
    </>;
}