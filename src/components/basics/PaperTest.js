import React from 'react';

// material ui
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

// styles
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

// https://material-ui.com/components/paper/
// https://material-ui.com/api/paper/

/**
 * Paper - configuração de background para conjunto de elementos filhos
 *    - cores, sombras, etc
 * 
 * Maior funcionalidade: prover estrutura para ativar Dark Theme (ver declaração no index.js)
 *   - ativando datk theme, paper troca de fundo para escuro/preto
 *   - nesse caso, todo o App deve ser "envelopado" em Paper
 *   - cores devem ser "default" para se alterarem automaticamente
 *   - componentes baseados em Paper refletem a mudança de cores com troca de modo
 * 
 * Props
 *   - elevation - destaca sombra de bordas
 *   - square - se eh true, desabilita cantos arredondados
 * 
 */

const useStyles = makeStyles({


});

function PaperTest(props) {
    const classes = useStyles();

    return (
        <>   
            <Typography variant="h6" align="center" gutterBottom> 
                 Texto FORA do Paper
            </Typography>

            <Divider/>

            <Paper elevation='10'>
              <Typography variant="h6" align="center" color="primary" gutterBottom> 
                 Texto dentro do Paper
               </Typography>
            </Paper>
                       
        </>
  );
}

export default PaperTest;
