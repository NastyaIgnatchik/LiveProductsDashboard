import { Grid, Typography, CircularProgress } from '@mui/material';
import { useGetProductsQuery } from '../services/product';
import CardItem from '../components/CardItem';
import React from 'react';

const Home = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <CircularProgress />;
  if (isError || !data || data.length === 0)
    return <Typography>Loading data error</Typography>;

  return (
    <Grid
      container
      spacing={{ xs: 4, md: 2, lg: 3 }}
    >
      {data.map((product) => (
        <Grid
          key={product?.id}
          size={{ xs: 12, sm: 6, md: 3 }}
        >
          <CardItem {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
