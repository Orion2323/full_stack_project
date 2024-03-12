import React, { useState, useEffect, useContext, FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, FormHelperText, TextField, Typography, Grid, Breadcrumbs, Link, AppBar, Toolbar} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import UserAPI from "../api/userApi.js"

export const RegisterPage = () => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');

    const [ loading, setLoading ] = useState(false);
    const [ message, setMessage ] = useState('')

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // call register API
        UserAPI.createUser(firstName, lastName, email, password).then(
            () => {
                navigate("/")
                window.location.reload();
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
                    <Link underline='hover' href='/' color='black'> MyLibraryWebApp </Link>
                </Toolbar>
            </AppBar>

            <Breadcrumbs separator='/' className='p-2' aria-label='breadcrumb' flexDirection='row' backgroundColor='#b2ffdd'>
                <Box ml={2}>
                    <Link underline='hover' href='/' color='black'> MyLibraryWebApp</Link>
                    <Link underline='hover' href='/register' color='black'> Register </Link> 
                </Box>
            </Breadcrumbs>
        </Box>

        <Container maxWidth="xs">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, }} >
                <Typography component="h1" variant="h5"> Register </Typography>
                    <Box component="form" onSubmit={handleSubmit} mt={3}>
                        <TextField label="First Name" margin="normal" required fullWidth autoComplete="name" onChange={(e) => setFirstName(e.target.value)} value={firstName} autoFocus />
                        <TextField label="Last Name" margin="normal" required fullWidth autoComplete="name" onChange={(e) => setLastName(e.target.value)} value={lastName} autoFocus />
                        <TextField label="Email" margin="normal" required fullWidth autoComplete="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <TextField label="Password" margin="normal" required fullWidth type="password" autoComplete="new-password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <FormHelperText mt={3}>{message}</FormHelperText>

                        <Grid container spacing={1} columns={16} mt={2}>
                            <Grid item xs={8} alignItems='center' justifyContent='center' display='flex'>
                                <LoadingButton type="submit" color='success' variant="contained" loading={loading} sx={{ mt: 4, mb: 3 }}>Register</LoadingButton>
                            </Grid>
                            <Grid item xs={8} alignItems='center' justifyContent='center' display='flex'>
                                <LoadingButton type="submit" color='error' variant="contained" loading={loading} onClick={() => navigate('/')}sx={{mt: 4, mb: 3}}> Cancel</LoadingButton>
                            </Grid>
                        </Grid>
                    </Box>
            </Box>
        </Container>
    </>;
}