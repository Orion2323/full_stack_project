import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Component, Breadcrumbs, Typography, Link } from '@mui/material';

import { LogIn } from 'react-feather'
import { Container } from '@mui/material';

export const LandingPage = () => {
    const navigate = useNavigate();

    return <>
        <Container>
            <Breadcrumbs separator='>' color='primary' aria-label='breadcrumb' flexDirection='column'>
                <Link underline='hover' href='/'> MyLibraryWebApp</Link>
            </Breadcrumbs>
        </Container>

        <Container>
            <Typography alignItems='center' justifyContent='center' display='flex' variant='h1'> My Library WebApp </Typography>
            <Typography classes='lead'> 
                Welcome to My Library WebApp, a personal project meant to sharpen my skills in back-end and front-end 
                development while mixing my love for literature. Since I have a lot of books, I fugured I could make a digital
                library that keep track of the books I currently have and whether I have read them, and a wishlist of books
                that I want. With that being said, Login or Register to create your personal library!
            </Typography>
        </Container>
    </>;
}