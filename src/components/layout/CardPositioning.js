import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import MyCard from '../information/MyCard';


const useStyles = makeStyles( () => ({
   gridContainer: {
       paddingTop: "40px",
       paddingLeft: "40px",
       paddingRight: "40px",
   }
}));

/**
 * Card sem o Grid ocupa todo o espaõ disponível na tela
 * 
 * Card dentro do Grid (que é um flexgrid container) ocupa o espaço necesśario para seus elementos
 * (definido pelo CSS do MyCard - minWidth)
 *  <== removendo esse minWidth, vai respeitar o tamanho do "item" xs={} definido no Grid item
 * 
 * 
 * spacing={4}  <= 4 vezes o tamanho default do theme ( ~4px)
 *  
 * 
 * 
 * 
 */


const CardPositioning = () => {

    const classes = useStyles();

    return (

        <Grid container spacing={4} className={classes.gridContainer} justify="center">
            <Grid item xs={12} sm={6} md={4}>
                <MyCard />
            </Grid>  
            <Grid item xs={12} sm={6} md={4}>
                <MyCard />
            </Grid>   
            <Grid item xs={12} sm={6} md={4}>
                <MyCard />
            </Grid>  
            <Grid item xs={12} sm={6} md={4}>
                <MyCard />
            </Grid>  
            <Grid item xs={12} sm={6} md={4}>
                <MyCard />
            </Grid>       
        </Grid>



    );
    
    
    
    
}

export default CardPositioning;