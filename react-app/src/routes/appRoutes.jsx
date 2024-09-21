import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage'; // Import from components folder
import Home from '../components/Home';
import ListGroup from "../components/ListGroup";
import Message from "../components/Message";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/list" element={<ListGroup />} />
            <Route path="/message" element={<Message />} />
        </Routes>
    );
};

export default AppRoutes;
