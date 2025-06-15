import React from 'react';
import { Typography, Button, Container, Paper } from '@mui/material';

const ErrorPage: React.FC = () => {

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          mt: 10,
          p: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" color="error" gutterBottom>
         Error :C
        </Typography>
        <Button variant="contained" color="primary" href="/">
          Return to home
        </Button>
      </Paper>
    </Container>
  );
};

export default ErrorPage;
