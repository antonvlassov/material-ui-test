import React from 'react';

// material ui
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import AcUnitIcon from '@material-ui/icons/AcUnit';

// styles
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

// https://material-ui.com/components/grid/
// https://material-ui.com/api/grid/

/**
 * divide a tela em 12 colunas do mesmo tamanho
 * 
 * tipos
 *    - container
 *        - com base no flex box
 *        - cada linha tem 12 colunas
 *        - cada item pode ocupar espaço entre 1 e 12 colunas
 *        - itens com tamanho menor que 12 ficam todos no mesma linha até completar 12, 
 *                se um item nao caber (soma de todos os itens exceder 12), é movido para proxima linha
 *        - atributos do Grid (xs, sm, md, lg, xl) são com base np theme (breakpoints)
 *        - spacing: espaçamento entre todos os itens (esq, dir, up, down) ~padding
 *        - direction - 
 *               row - grid itens são adicionados sequencialente preenchendo a linha
 *               columns - um item por linha sempre, indefinidamente 
 * 
 *    - item 
 *        - ficam dentro do container
 *        - dica = <Grid/> - vazio reservando espaço em colunas
 *        - sem espaço declarado (xs etc ) - ocupa o espaço necessário para os conter os filhos
 *    
 *    - ambos ao mesmo tempo
 *         - um item dentro do container se torna container para outros itens
 *         - itens com sizing decalarado xs, sm, etc são em relação a esse novo item-container 
 *         - por padrão, direction=row ( em relação a super-container que é colum)
 *    
 *         - combinando containers/item-container e containers é possível contruir layouts
 *           coplexos para sites com header, footer, organziação interna, etc
 * 
 *    - propriedades de alinhamento (flexboxfroggy.com)
 *         - alignContent - controla espaçamento ENTRE itens, mas não o conteúdo dos itens
 * 
 *         
 *         - alignItems - ALINHAMENTO NO EIXO Y - VERTICAL (direção =row)
 *          
 *   
 *         
 *         - justify - ALINHAMENTO NO EIXO X - HORIZONTAL  (direção =row)
 *              - flex-start - do começo da linha a esquerda
 *              - flex-end - começa da direira
 *              - space - aidicona espaço entre os elementos para distribuir da maneira uniforme na linha
 * 
 *              ATENÇÃO:
 *                  se a direcion for COLUMNS, os eixos são trocados
 *                  alignItems funciona no eixo X e justify no eixo Y
 * 
 *              ATENÇÃO 2
 *               *** não alinha filhos do GridItem dentro do GridItems
 *               *** elemento que ocupa 12 pos (tela inteira) considerado centralizado 
 *                   (itens dentro do Grid não são afetados por esses comandos)
 *               *** para alinhar elemento DENTRO do GridItem, aplicar o style direto no GridItem
 *                   style={{ textAlign: 'center' }} <== depende do elemento que está dentro, ver CSS 
 * 
 */


const useStyles = makeStyles((theme) => ({

    root: {
        // flexGrow: 1,
      },
      paper: {
        //padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        backgroundColor: 'blue'
        // spacing={3}
      },
}));

function GridTest(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Grid container spacing={4} direction = "column" >
            <Grid item xs={12} sm={6} lg={4}>
                <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={12} container justify='space-around' alignItems='stretch'>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>subcontainer item xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>subcontainer item xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>subcontainer item xs=3</Paper>
                    </Grid>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid> 

            <Grid container justify='flex-start' alignItems='flex-end'
                  style={{ height: "100px", backgroundColor: 'gray'}}>

                <Grid item xs={12} style={{ textAlign: 'center', backgroundColor: 'green'}}>
                   <AcUnitIcon color="primary" />
                </Grid> 
                <Grid item xs={3} style={{ backgroundColor: 'green'}}>
                     <AcUnitIcon color="secondary" />
                </Grid>
            
            </Grid>     
          </Grid>
        
      </div>
  );
}

export default GridTest;
