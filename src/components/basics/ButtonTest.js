import React from 'react';

// material ui
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles'; 
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

//
const useStyles = makeStyles({
    root: {
        backgroundColor: "gray",
    },
    text: {
        color: "pink",
    },
});

// https://material-ui.com/components/buttons/
// https://material-ui.com/api/button/

// cores - default, primary, secundary - definidos em configs de themes

function ButtonTest(props) {
    const classes = useStyles();

    return (
        <>
            
          <Container component="main" maxWidth="sm">
            <Button variant="contained" 
                    color="secondary" 
                    startIcon={<DeleteIcon/>}
                    endIcon={<DeleteIcon/>}>Button with Icon</Button>

            <IconButton color="primary" aria-label="delete" className={classes.margin}>
                  <DeleteIcon fontSize="large" />
            </IconButton>

            <IconButton aria-label="delete" className={classes.margin}>
                  <AddShoppingCartIcon />
            </IconButton>

            <Button variant="outlined" size='small'>Outlined Small Button</Button>

            {
                // cada Rule definido em https://material-ui.com/api/button/#css
                // pode ser sobrescrito usando prop classes
                // conjunto de classes definido em useStyles
                // "deep styling"
            }
            <Button classes={{
                root: classes.root,
                text: classes.text
            }}>
            Styled Button</Button>
         </Container>  
        </>
  );
}

export default ButtonTest;
