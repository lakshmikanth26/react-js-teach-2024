import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Container, Typography } from '@mui/material';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm">
        <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
            Home Page
            </Typography>
            <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/login')}
            >
            Go to Login
            </Button>
        </Box>
        </Container>
    );
};

export default Home;
