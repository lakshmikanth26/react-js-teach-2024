import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage'; // Import from components folder
import Home from '../components/Home';
import ListGroup from "../components/ListGroup";
import Message from "../components/Message";
import Register from '../components/Registration';
import ProductList from '../components/ProductList';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/list" element={<ListGroup />} />
            <Route path="/message" element={<Message />} />
            <Route path="/products" element={<ProductList />} />
        </Routes>
    );
};

export default AppRoutes;
