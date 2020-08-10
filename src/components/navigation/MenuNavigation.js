import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// react router
import { Link as RouterLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1, // tudo que vem apos o componente, é empurrado para lado direito final da tela
    },
  }));





/**
 * 
 * AppBar - layout - positions e styling (background), alinhamento como Header (princpal)
 * 
 * - color  e position - principais 
 * - variant - dense - header ocupa menos espaço, mais concentrado
 * 
 * TooBar - estrutura e ainhamento, pode eventualmete ser usado em outros componentes
 * 
 * 
 */

const MenuNavigation = (props) => {

  const classes = useStyles();

  const { history } = props; 

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  
  // onde menu vai aparecer - anchor o elemento que foi clicado
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null); // fecha menu
  };

  const handleMenuClick = (routeTo) => {
    history.push(routeTo);
    setAnchorEl(null); // fecha menu
  };

  return (
   <> 
    <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon onClick={openMenu}/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            News
            </Typography>
            <Button color="inherit">Login</Button>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={closeMenu}
              >
                <MenuItem onClick={() => handleMenuClick("/menunavigation/about")}>About</MenuItem>
                <MenuItem>
                    <Button color='inherit' component={RouterLink} to="/menunavigation/content">Content</Button>
                 </MenuItem>
              </Menu>
        </Toolbar>
    </AppBar>
   </>
  );

}


export default withRouter(MenuNavigation);
  

