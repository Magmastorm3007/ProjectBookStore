

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
      <AppBar  style={{ background: '#2E3B55' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > 
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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