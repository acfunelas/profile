import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    header: {
        position: 'absolute!important',
				backgroundColor: 'transparent!important',
				boxShadow: 'none!important',
        position: '-webkit-sticky',
        position: 'sticky',
    },
		headerItem: {
			marginLeft: '20px !important',
			marginRight: '20px !important',	
		}
});

const pages = [
  {text: 'home', active: true},
  {text: 'skills', active: false},
  {text: 'projects', active: false},
  {text: 'services', active: false},
  {text: 'about', active: false},
];

const ResponsiveAppBar = () => {
	const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className={classes.header}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src='/images/logo.png' alt='logo2' />

          </Typography>
					<Box sx={{ flexGrow: 1, display: {md: 'flex', xs: 'none'} }}/>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>	
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, id) => (
                <MenuItem key={id} onClick={handleCloseNavMenu} className={classes.headerItem}>
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
              ))}
              <MenuItem key="contact" onClick={handleCloseNavMenu} className={classes.headerItem}>
                <Typography textAlign="center">Contact me</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}
          >
            <img src='/images/logo.png' alt='logo2'/>
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, id) => (
              <Button
                key={id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: page.active ? "primary" : "white", display: 'block' }}
								className={classes.headerItem}
              >
                {page.text}
              </Button>
            ))}
							<Button variant="outlined" style={{padding: "10px 20px!important", borderWidth: 3}}>contact me</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;