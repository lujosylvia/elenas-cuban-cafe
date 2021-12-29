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
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
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