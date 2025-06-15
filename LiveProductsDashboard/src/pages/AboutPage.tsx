import { useParams } from 'react-router';
import { useGetProductsQuery } from '../services/product';
import {
  Typography,
  Container,
  Box,
  CircularProgress,
} from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router';

const AboutPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery();
  const { state } = useLocation();

  if (isLoading) return <CircularProgress />;
  if (isError || !data || data.length === 0) return <Typography>Error loading</Typography>;

  const product = data?.find((p) => p.id === Number(id));
  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box
        component="img"
        src={product.image}
        alt={product.title}
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'contain',
          mb: 3,
        }}
      />
      <Typography variant="h4" gutterBottom>
        {product.title}
      </Typography>
      <Typography variant="h6" color="text.primary" gutterBottom>
        Price: ${state.livePrice === '0' || !state.livePrice ? product.price : state.livePrice}
      </Typography>
      <Typography variant="body1">{product.description}</Typography>
    </Container>
  );
};

export default AboutPage;
