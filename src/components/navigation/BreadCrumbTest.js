import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { 
    List,
    ListItemIcon,
    ListItemText,
    ListItem,
    Typography

} from '@material-ui/core';

import ContentPage from './ContentPage';
import AboutPage from './AboutPage';

/**
 * permite envelopar o componente com higher order function do Router
 * passando esse a ter acesso a properties (history, location, etc)
 */
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";


const useStyles = makeStyles({


 
});


/**
 * 
 * Breadcrumbs tem  lista de elementos
 * 
 * ordem dos elementos (de cima pra baixo), é a sequência que será exibida no breadcrumb:
 * / elemento 1 / elemento 2 / elemento 3  
 * 
 * primeiro Breadcrumb é sempre Home Page
 * 
 * Colocado no topo leve do App (dentro do Router para usar react routerr)
 * 
 */

const BreadCrumpTest = (props) => {
  
  const classes = useStyles();

  // react router props
  

  // location.pathname <= o que está na URL agora

  const { history, location } = props;
  const { pathname } = location;
  console.log(pathname);
   
  // primeiro elemento é sempre vazio (empty string antes do "/") 
  // ser utilizado para montar Breadcrumb dinamico com base no path 
  const pathnames = pathname.split("/").filter(x => x); // filter - vazio === false, sai do filtro
 
  return (
   <> 
    <Breadcrumbs>

      {
       // se nao esta na home, Home vira link
       // se não, vira Texto (esta na home)
       pathnames.length > 0 
        ?
            <Link onClick={ () => history.push("/breadcrumb")}>
                BreadCrumb Test
            </Link>
        : <Typography>BreadCrumb Test</Typography>     

      }
      
      {
        // montra breadcrumb dinamico em relação a URL
        pathnames.map ( ( name, index) => {

            // slice - cria um array recortando do array original (non-inclusive)
            // join - retira os elementos do array e transforma em String unindo por "/"
            const routeTo = `/${pathnames.slice(0, index+1).join("/")}`;
            console.log("*****", name, routeTo);

            // ultimo elemento é sempre Typography (nao faz sentido ser link)
            const isLast = (index === pathname.length - 1);
            
            return isLast 
                ? 

                    <Link onClick={ () => history.push(routeTo)}>
                    {name}
                    </Link>
                :
                    <Typography>{name}</Typography>    
            
        })

      }


   
    </Breadcrumbs>
     <Route extact path="/breadcrumb/about">
                <AboutPage/>
     </Route>
    <div className={classes.container}> 
         Breadcrumbs
     </div> 
   </>
  );
}

export default withRouter(BreadCrumpTest);
