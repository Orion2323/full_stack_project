import React, { useState, useEffect, useContext, FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, FormHelperText, TextField, Typography, Grid, Link, Breadcrumbs, AppBar, Toolbar } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import UserAPIs from "../api/userApi.js";

export const LoginPage = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');

    const [ message, setMessage ] = useState("");
    const [loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("")
        setLoading(false)

        // call login API
        UserAPIs.loginUser(email, password).then(
            () => {
                navigate("/inner-home")
                window.location.reload()
            },
            (error) => {
                setMessage(error.response.data)
                setLoading(false)
            }
        )
    }

    return <> 
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='success'>
                <Toolbar>
                    <Link underline='hover' href='/' color='text.primary' aria-current="page"> MyLibraryWebApp </Link>
                </Toolbar>
            </AppBar>
            <Breadcrumbs separator='/' className='p-2' aria-label='breadcrumb' flexDirection='row' backgroundColor='#b2ffdd'>
                <Box ml={2}>
                    <Link underline='hover' href='/' color='black'> MyLibraryWebApp </Link>
                    <Link underline='hover' href='/login' color='black'> Login </Link> 
                </Box>
        </Breadcrumbs>
        </Box>

       <Container maxWidth="xs">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, }} >
                <Typography component="h1" variant="h5"> Log In </Typography>
                    <Box component="form" onSubmit={handleSubmit} mt={3}>
                        <TextField label="Email" margin="normal" required fullWidth autoComplete="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <TextField label="Password" margin="normal" required fullWidth type="password" autoComplete="new-password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <FormHelperText>{message}</FormHelperText>

                        <Grid container spacing={1} columns={16} mt={2}>
                            <Grid item xs={8} alignItems='center' justifyContent='center' display='flex'>
                                <LoadingButton type="submit" color='primary' variant="contained" loading={loading} sx={{ mt: 4, mb: 3 }}> Login </LoadingButton>
                            </Grid>
                            <Grid item xs={8} alignItems='center' justifyContent='center' display='flex'>
                                <LoadingButton type="submit" color='error' variant="contained" loading={loading} onClick={() => navigate('/')}sx={{mt: 4, mb: 3}}> Cancel </LoadingButton>
                            </Grid>
                        </Grid>
                    </Box>
            </Box>
        </Container>
    </>;
}