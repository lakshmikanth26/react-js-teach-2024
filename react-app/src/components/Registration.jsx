// src/components/Register.js
import React, { useState } from "react";
import { Box,TextField,Button,Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import constants from '../constants/Constants.js';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const homeNavigate = () => navigate('/')
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${constants.API_ENDPOINT}/users/register`, formData);
            toast.success(`${response.data} Redirecting to home page...` , {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                theme: "dark"
            });
            setTimeout(() =>{
                homeNavigate()
            },2000)
        } catch (error) {
            if (error.response?.status === 400) {
                toast.error("Email is already in use.",{
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark"
                });
                setMessage(error.response.data);
                
            } else {
                toast.error("An unexpected error occurred.",{
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark"
                });
            }
        }
    };

    return (
        <Box
            sx={{
                maxWidth: 400,
                mx: 'auto',
                mt: 5,
                p: 3,
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: 2,
                bgcolor: 'background.paper'
            }}
        >
            <Typography variant="h4" align="center" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Register
                </Button>
            </form>
            {message && (
                <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
                    {message}
                </Typography>
            )}
            <ToastContainer />
        </Box>
    );
};

export default Register;
