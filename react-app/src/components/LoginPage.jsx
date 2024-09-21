import React, { useState } from "react";
import {
    Container,
    Box,
    TextField,
    Button,
    Typography,
    Stack,
} from "@mui/material";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        let isValid = true;
    
        // Email validation
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Email is invalid');
            isValid = false;
        } else {
            setEmailError('');
        }
    
        // Password validation
        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            isValid = false;
        } else {
            setPasswordError('');
        }
    
        if (isValid) {
            console.log('Form is valid, proceed with login');
          // Perform login actions here
        }
    };

    return (
        <Box
        sx={{
            height: '100vh', // Full viewport height
            display: 'flex',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            backgroundColor: '#f0f0f0', // Optional background color for the entire page
        }}
        >
        <Container maxWidth="sm"
        sx={{
            backgroundColor: 'lightblue',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Optional for some styling
        }}>
        <Box
            sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
            Login
            </Typography>
            <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <Stack spacing={3}>
                <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                error={!!emailError}
                helperText={emailError}
                />
                <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                error={!!passwordError}
                helperText={passwordError}
                />
                <Button type="submit" fullWidth variant="contained" color="primary">
                Login
                </Button>
            </Stack>
            </Box>
        </Box>
        </Container>
        </Box>
    );
};

export default LoginPage;
