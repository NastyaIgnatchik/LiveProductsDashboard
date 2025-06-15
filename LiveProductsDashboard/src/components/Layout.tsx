import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';
import React from 'react';

const Layout = () => (
  <>
    <Header />
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4, minHeight:'60vh' }}>
      <Outlet />
    </Container>
    <Footer />
  </>
);

export default Layout;
