// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button, Grid, Rating } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ display: 'flex', mb: 2, boxShadow: 2 }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        sx={{ 
            width: 250,             // Fixed width
            height: 340,            // Fixed height
            objectFit: 'cover',   // Ensures the image maintains its aspect ratio
            padding: 1,             // Optional: Adds some padding around the image
            backgroundColor: '#f5f5f5'  // Optional: Gives a neutral background for smaller images
        }}

        image={product.image}
        alt={product.title}
      />
      
      {/* Product Details */}
      <CardContent sx={{ flex: 1 }}>
        {/* Sponsored Tag */}
        <Typography variant="caption" color="text.secondary">Sponsored</Typography>
        
        {/* Product Title */}
        <Typography variant="h6">{product.title}</Typography>
        
        {/* Rating */}
        <Rating value={product.rating} precision={0.5} readOnly size="small" />
        <Typography variant="body2" color="text.secondary">{product.reviews} reviews</Typography>

        {/* Great Indian Festival Tag */}
        <Typography variant="caption" color="error" sx={{ fontWeight: 'bold' }}>
          Great Indian Festival
        </Typography>
        
        {/* Price and Discount */}
        <Typography variant="h5" color="primary">{product.price}</Typography>
        <Typography variant="body2">
          <s>{product.mrp}</s> &nbsp; {product.discount}
        </Typography>
        
        {/* Additional Offer Details */}
        <Typography variant="body2" color="text.secondary">{product.offerDetails}</Typography>
        
        {/* Delivery and Service Info */}
        <Typography variant="body2" color="primary">{product.delivery}</Typography>
        <Typography variant="body2" color="text.secondary">{product.service}</Typography>

        {/* Add to Cart Button */}
        <Button variant="contained" color="warning" sx={{ mt: 1 }}>Add to cart</Button>
        
        {/* Link to more colors */}
        <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
          +{product.moreColors} colors/patterns
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
