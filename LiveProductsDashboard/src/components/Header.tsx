import { AppBar, Toolbar, Link } from '@mui/material';
import { Link as RouterLink } from "react-router";
import theme from '../theme/theme'
import React from 'react';

const Header = () => (
  <AppBar position='static'>
    <Toolbar>
      <Link
        component={RouterLink}
        aria-label="Navigate to home page"
        to={'/'}
        sx={{ color: theme.typography.logo }}
        underline="none"
      >
        Live Products Dashboard
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;