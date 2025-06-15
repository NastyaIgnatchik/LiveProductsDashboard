import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router';
import { useSubscribeToPriceUpdatesQuery } from '../services/priceUpdate';

interface CardItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const CardItem: React.FC<CardItemProps> = ({ id, title, image, price }) => {

const { data} = useSubscribeToPriceUpdatesQuery()
  
  return (
    <Card sx={{ height: '100%', width: "100%" }} data-testid="product-card">
      <CardActionArea
        component={Link}
        to={`/product/${id}`}
        state={{
          livePrice: data?.price
        }}>
        <CardMedia
          component="img"
          height="100%"
          width="100%"
          image={image}
          alt={title}
          sx={{
            borderRadius: "18px",
            height: "150px",
            padding: 2,
            objectFit: 'contain'
          }} />
        <CardContent>
          <Typography variant="h6" noWrap>{title}</Typography>
          <Typography color="text.primary">${!data?.price || data?.price==='0' ? price : data?.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardItem;
