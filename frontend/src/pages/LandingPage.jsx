import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Breadcrumbs, Typography, Link, Grid, Container, AppBar, Toolbar, Box} from '@mui/material';

export const LandingPage = () => {
    const navigate = useNavigate();

    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='success'>
                <Toolbar>
                    <Link underline='hover' href='/' color='text.primary' aria-current="page"> MyLibraryWebApp </Link>
                </Toolbar>
            </AppBar>
        </Box>
        
        <Container maxWidth='lg'>        
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