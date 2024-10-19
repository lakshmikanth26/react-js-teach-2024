import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Container, Typography } from '@mui/material';

const Home = () => {
    const navigate = useNavigate();
    const loginNavigate = () => navigate('/login')
    const HomeDom = <Container maxWidth="sm">
    <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <Typography variant="h4" component="h1" gutterBottom>
            Home Page - version 1
        </Typography>
        <Button
        variant="outlined"
        color="primary"
        onClick={loginNavigate}
        >
        Go to Login
        </Button>
    </Box>
    </Container>

    return HomeDom;
};

export default Home;
