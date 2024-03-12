import React, { useState, useEffect, useContext, FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Container, FormHelperText, TextField, Typography, Breadcrumbs, Link, IconButton, Toolbar} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export const InnerLandingPage = () => {

    const navigate = useNavigate();

    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='success'>
                <Toolbar>
                    <IconButton size="large" edge="start" color="black" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuRoundedIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> MyLibraryWebApp </Typography>
                    <IconButton>
                        <AccountCircleRoundedIcon size='large'/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Breadcrumbs backgroundColor='#b2ffdd' className='p-2'>
                <Box ml={9}>
                    <Link underline='hover' href='/' color='black'> Home </Link>
                </Box>
            </Breadcrumbs>
        </Box>
    </>
}