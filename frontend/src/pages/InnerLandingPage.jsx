import React, { useState, useEffect, useContext, FormEvent} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Container, FormHelperText, TextField, Typography, } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const InnerLandingPage = () => {
    return <>
        <Typography component='h1' variant='h5'> Welcome! </Typography>
    </>
}