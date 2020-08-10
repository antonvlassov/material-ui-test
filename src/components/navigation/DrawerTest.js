import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { 
    List,
    ListItemIcon,
    ListItemText,
    ListItem

} from '@material-ui/core';

import ContentPage from './ContentPage';
import AboutPage from './AboutPage';

/**
 * permite envelopar o componente com higher order function do Router
 * passando esse a ter acesso a properties (history, location, etc)
 */
import { withRouter } from "react-router-dom";


const useStyles = makeStyles({

  drawer: {
    width: "460px"
  },

  container : {
    display: "flex"
  }
 
});


/**
 * 
 * 
 * MENU que abre ao clicar (padrão Google)
 * - geralmente deve ir para componente top-level
 * 
 * Pode abrir de qualquer um dos lados da tela, pela propriedade "anchor"
 * 
 * Temporary (precisa clicar para ser aberto)
 *   - abre em cima do conteúdo existente, desfocando o resto da tela para "background"
 * 
 * Persistent (precisa clicar para ser aberto)
 *   - empurra o conteúdo quando abre, o restante não fica em background
 * 
 * Permanent
 *   - sempre fica visível (padrão de menu tradicional)  - propriedade "open" não é especificada
 *   - aparece "on-top" de qualquer coisa, override do que esta embaixo dele
 *   - syling para posicionar corretamente
 */

const DrawerTest = (props) => {
  
  const classes = useStyles();

  // react router props
  console.log(props);

  const { history } = props;

 
  return (
   <> 
     Drawer
    <div className={classes.container}> 
      <Drawer variant="permanent" anchor="left" className={classes.drawer}>
          <List>
              <ListItem button onClick={ () => history.push("/drawer/about")} >
                  <ListItemIcon><InboxIcon/></ListItemIcon>
                  <ListItemText>About</ListItemText>
              </ListItem>
              <ListItem button onClick={ () => history.push("/drawer/content")}>
                  <ListItemIcon><MailIcon/></ListItemIcon>
                  <ListItemText>Content</ListItemText>
              </ListItem>
              <Divider />
              <ListItem button onClick={ () => history.push("/drawer/other")}>
                  <ListItemIcon><MailIcon/></ListItemIcon>
                  <ListItemText>Other</ListItemText>
              </ListItem>
          </List>
      </Drawer>
     </div> 
   </>
  );
}

export default withRouter(DrawerTest);
