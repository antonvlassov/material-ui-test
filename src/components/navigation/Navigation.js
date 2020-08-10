import React from 'react';

// material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import TypoGraphy from '@material-ui/core/Typography';
import AcnUnitRounded from '@material-ui/icons/AcUnitRounded';
import { makeStyles } from '@material-ui/styles';

// react router
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles( () => ({
    typographyStyles: {
       // flex: 1,
        flexGrow: 1
    }
}));


const Navigation = ( { darkMode, setDarkMode  }) => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <TypoGraphy className={classes.typographyStyles}>Testes Material UI</TypoGraphy>
                <Switch checked={darkMode} onChange={ () => setDarkMode(!darkMode)} />
                <Button color='inherit' component={RouterLink} to="/makestyle">makeStyle</Button>
                <Button color='inherit' component={RouterLink} to="/button">Button</Button>
                <Button color='inherit' component={RouterLink} to="/typo">Typography</Button>
                <Button color='inherit' component={RouterLink} to="/paper">Paper</Button>
                <Button color='inherit' component={RouterLink} to="/grid">Grid</Button>
                <Button color='inherit' component={RouterLink} to="/card">Card</Button>
                <Button color='inherit' component={RouterLink} to="/table">Simple Table</Button>
                <Button color='inherit' component={RouterLink} to="/tabs/about">Tabs</Button>
                <Button color='inherit' component={RouterLink} to="/drawer">Drawer</Button>
                <Button color='inherit' component={RouterLink} to="/breadcrumb">BreadCrumb</Button>
                <Button color='inherit' component={RouterLink} to="/accordion">Accordion</Button>
                <Button color='inherit' component={RouterLink} to="/menunavigation">Menu Navigation</Button>
                
                <AcnUnitRounded/>
            </Toolbar>
        </AppBar>
    )
}


export default Navigation;