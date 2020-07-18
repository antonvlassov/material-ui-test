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
        flex: 2,
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
                <AcnUnitRounded/>
            </Toolbar>
        </AppBar>
    )
}


export default Navigation;