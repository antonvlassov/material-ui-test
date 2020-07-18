import React from 'react';

// material ui
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles'; 

//
const useStyles = makeStyles({
    root: {
        backgroundColor: "gray",
    },
    text: {
        color: "pink",
    },
    gutterBottom: {
        marginBottom: "2.0em"
    }

});

// https://material-ui.com/components/typography/
// https://material-ui.com/api/typography/

// cores - default, primary, secundary - definidos em configs de themes

/**
 * nowrap - coloca .. no final do texto caso esse exceda a width da linha, em vez de wrap
 * variantMapping - permite selecionar dentro de qual DOM element (div, span, p, etc) 
 *             o texto será renderizado, para cada variantMapping possível
 * component - permite selecionar dentro de qual DOM element (div, span, p, etc) para renderizar o texto
 * gutterBottom - aplicam uma margin pequena 0.35 no lado inferior
 */

function TypographyTest(props) {
    const classes = useStyles();

    return (
        <>
            
            <Typography variant="h6" align="left" color="secondary"> Secondary  Left </Typography> 
            <Typography variant="h6" align="right" color="primary" paragraph> Primary Right </Typography>
            <Typography variant="h6" align="center" color="secondary" gutterBottom> 
            
            Gutter Bottom </Typography>

            <Typography variant="h6" 
                      align="center"
                      variantMapping={{
                        h6: "span"
                      }}
                      classes={{
                          gutterBottom: classes.gutterBottom
                      }}
                      gutterBottom
                      
                      > Variant Mapping and Gutter Bottom (margem inferior apos render o texto) </Typography>

            <Typography align="center"> Default  </Typography>         
         
        </>
  );
}

export default TypographyTest;
