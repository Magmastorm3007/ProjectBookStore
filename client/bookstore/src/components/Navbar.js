

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  style={{ background: '#663300' }} position="static">
        <Toolbar>
         
          <Typography variant="h6" align="center" component="div" sx={{ flexGrow: 1 }}>
        Online BookStore
          </Typography>

          <Button color="inherit">Login</Button>
          <Button color="inherit"><ShoppingCartIcon/></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

/*import React from 'react'

function Navbar() {
  return (
    <div>Navbar</div>
  )
}

export default Navbar

*/ 