import React from 'react';

// material ui
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles'; 

// classnames - biblioteca que permite combinar dois ou mais classes
// classes poder ser adicionados condicionalmente
// classnames (classe1, classe2)

// JSS - CSS in Javascript 
// makeStyle hook

/**
 * cada componente do Material possui dentro da sua documentação CSS 
 *  a lista de Classes default e das propriedades que pode se sobrescrita
 *  como é design system, nem todos os atributos podem ser alterados
 * Todas as classes default tem padrão desse tipo: .MuiButton-root
 * https://material-ui.com/pt/api/button/#css
 * 
 */ 


// objeto com diferentes objetos que definem classes
// gera uma deifnição específica da classe para anotar que custom, com um ID gerado sequencialmente para 
// impedir conflitos

const useStyles = makeStyles({
    buttonStyle: {
        color: "red"
    },
});

const conditionalStyles1 = makeStyles({
   
    // utilização de props
    conditionalButtonStyle: {
        color: props => (props.blue ? "blue" : "green")
    }

});


const conditionalStyles2 = makeStyles({

    buttonStyle: props => {

        return {
            color: props.blue ? "blue" : "red",
            backgroundColor: props.blue ? "orange" : "blue"
        }

    }
   
});

/**
 * React possui um Theme default - que define fontes, tamanhos,cores etc
 * https://material-ui.com/customization/default-theme/#default-theme
 */
const stylesWithTheme = makeStyles( theme => ({
    buttonStyle: {
        color: "blue",
        // [ theme.breakpoints.up("sm")] : {
        //     color: "green"
        // }
    },
    buttonBackground: {
        backgroundColor: "pink"
    }
}));


function SimpleTest(props) {
    const classes = useStyles();
    const condClasses = conditionalStyles1(props);
    const condClasses2 = conditionalStyles2(props);
    const themedClasses = stylesWithTheme();
    return (
        <>
            <Button className={classes.buttonStyle}>Small Button</Button>
            <Button className={condClasses.conditionalButtonStyle}>Cond Style Button (props) 1</Button>
            <Button className={condClasses2.buttonStyle}>Cond Style Button (props) 2</Button>

            {
                // fullWith - ocupa todo o container (responsivo)
            }
            <Button fullWidth className={condClasses.buttonStyle}>Full Width Button</Button>

            <Button fullWidth className={themedClasses.buttonStyle}>Theme Variation Button</Button>
        </>
  );
}

export default SimpleTest;
