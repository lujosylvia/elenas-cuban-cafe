import { AppBar, Toolbar,  Box, IconButton, Typography, Button, Menu, MenuItem } from "@mui/material";
import MenuIcon  from '@mui/icons-material/Menu';
import useHistory from "react-router-dom";
import { useAppToolbarStyles } from "./styles"; 

import React from "react";
import { Link } from "react-router-dom";

const pages = [{
        title: 'Menu',
        route: "menu"
    }, {
        title: 'Location',
        route: "location"
    }];

const AppToolbar = () => {
    const styles = useAppToolbarStyles();

    const [anchorElNav, setAnchorElNav] = React.useState<any>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
    return(
        <Box classes={styles.root} sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
            <AppBar position="fixed">
            <Toolbar>
            <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={(event) => setAnchorElNav(event.currentTarget)}
                    color="inherit"
                    >
                    <MenuIcon />
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
                    {pages.map((page) => (
                        <MenuItem key={page.title} component={Link} to={page.route} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page.title}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                <Box sx={{flexGrow: 1}} />
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page.title}
                        component={Link}
                        to={page.route}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page.title}
                    </Button>
                    ))}
                </Box>
                <Box sx={{ mt: '0px' }}>
                    <Button
                        className={styles.orderButton}
                        component={Link}
                        to="order-now"
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Order Now
                    </Button>
                </Box>
            </Toolbar>
            </AppBar>
        </Box>
    );
}

export default AppToolbar;