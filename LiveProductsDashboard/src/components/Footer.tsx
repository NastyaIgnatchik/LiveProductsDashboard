import { Box, Typography,Divider } from '@mui/material';
import React from 'react';

const Footer = () => (
  <Box sx={{ mt: 4, py: 2, textAlign: 'center'}}>
    <Divider sx={{m:2}}/>
    <Typography variant="footer" >
      © 2025 Live Products Dashboard
    </Typography>
  </Box>
);

export default Footer;
