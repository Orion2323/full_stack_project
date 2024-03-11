import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Breadcrumbs, Typography, Link, Grid, Container} from '@mui/material';

export const LandingPage = () => {
    const navigate = useNavigate();

    return <>
        <Container maxWidth='lg'>
            <Breadcrumbs separator='>' className='mx-5 py-3 p-2 mb-3' backgroundColor='green' aria-label='breadcrumb' flexDirection='column'>
                <Link underline='hover' href='/' color='black'> MyLibraryWebApp</Link>
            </Breadcrumbs>
        
            <Typography gutterBottom alignItems='center' justifyContent='center' display='flex' variant='h2'> My Library WebApp </Typography>
            <Typography gutterBottom mt={6} variant='body1'> 
                Welcome to My Library WebApp, a personal project meant to sharpen my skills in back-end and front-end 
                development while mixing my love for literature. Since I have a lot of books, I fugured I could make a digital
                library that keep track of the books I currently have and whether I have read them, and a wishlist of books
                that I want. With that being said, Login or Register to create your personal library!
            </Typography>       

            <Grid container spacing={1} columns={16} mt={10}> 
                <Grid item xs={8} alignItems='center' justifyContent='center' display='flex'>
                    <Button variant='outlined' color='success' size='large' onClick={() => navigate('/register')}> Register </Button>
                </Grid>
                <Grid item xs={8} alignItems='center' justifyContent='center' display='flex'>
                    <Button variant='outlined' color='primary' size='large' onClick={() => navigate('/login')}> Login </Button>
                </Grid>
            </Grid>
        </Container>
    </>;
}