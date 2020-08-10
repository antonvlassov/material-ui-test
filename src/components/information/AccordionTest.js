import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
 
});


/**
 * 
 * Utiliza ExpansionPanel como componente técnico base
 * 
 * Expande detalhes quando se faz um clique em um botão 
 * 
 * AccordionActions - permite criar botões para usuário tomar alguma ação sobre os componentes
 * 
 * - partes escondidos já são renderizados para DOM, e somente são exibidos quando usuário deseja,
 *   para otimizar a performance, porém pode ser desativado caso o conteúdo a ser exibdo é muito pesado
 * 
 * Controled Accordion
 *  - permite agrupar conjunto de Accordion
 *  - somente um deles pode estar expandido (se um abre, outro fecha, utiliza estado para esse fim)
 *     expanded, setExpanded que nomeia o painel que será expandido - function onChange
 *     isExpanded - evento default do Accordion para que possa ser controlado
 */

const AccordionTest = () => {

  const classes = useStyles();

  return (
   <>
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
   </>
  );

}


export default AccordionTest;
  

