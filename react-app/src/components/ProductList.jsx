// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { Grid, Container, CircularProgress } from '@mui/material';
import ProductCard from './ProductCard';
import axios from 'axios';

// Aim is to call API and store product details
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/products")
                setProducts(response.data)
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Container sx={{ py: 5 }}>
            {loading ? (
                <CircularProgress />
            ) : (
                <Grid container spacing={2}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default ProductList;
