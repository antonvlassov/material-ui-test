import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';

import ContentPage from './ContentPage';
import AboutPage from './AboutPage';

const useStyles = makeStyles({

  appbar: {
    //paddingTop: "40px"
  }
 
});


/**
 * 
 * 
 * 
 * 
 * 
 */

export default function TabTest(props) {
  
  const classes = useStyles();

  // react router props
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  console.log(match, params, page);

  // maps de Tab ID para o caminho (rota do router)
  const tabNameToIndex = {
    0: "about",
    1: "contact",
    2: "other"
  }

  const indexToTabName = {
    "about": 0,
    "contact": 1,
    "other" : 2
  }
 
  // obtem o "page" do Router e mapeia para qual tab deve ser selecionado
  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

  const handleTabChange = (event, newValue) => {
    
    // obtem o valor, e configura a /URL correspondente de acordo com a aba selecionada
    history.push(`/tabs/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  }

 
  return (
   <>
    <AppBar position="static" className={classes.appbar}>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="About"/>
        <Tab label="Content"/>
        <Tab label="Outro"/>
      </Tabs>
     </AppBar>
      {selectedTab === 0 && <AboutPage /> }
      {selectedTab === 1 && <ContentPage /> }
      {selectedTab === 2 && <div>"Outros"</div> }
   </>
  );
}
