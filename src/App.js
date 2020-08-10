import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// material ui
import Grid from "@material-ui/core/Grid";

// theming
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// colors: definições padrões do Material UI para cada cor a ser usada em createMuiTheme
// para cada cor, são definidas os 4 cores (main, dark, light, etc) para cada objeto cor
import purpleColor from '@material-ui/core/colors/purple';
import greenColor from '@material-ui/core/colors/green';

import Paper from '@material-ui/core/Paper';

// app componentes
import Navigation from './components/navigation/Navigation';

// tests
import SimpleTest from './components/styles/MakeStyles';
import ButtonTest from './components/basics/ButtonTest';
import TypographyTest from './components/basics/TypographyTest';
import PaperTest from './components/basics/PaperTest';
import GridTest from './components/layout/GridTest';
import CardPositioning from './components/layout/CardPositioning';
import SimpleTable from './components/information/SimpleTable';
import TabTest from './components/navigation/TabTest';
import DrawerTest from './components/navigation/DrawerTest';
import BreadCrumbTest from './components/navigation/BreadCrumbTest';

// router
// react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AboutPage from './components/navigation/AboutPage';
import ContentPage from './components/navigation/ContentPage';
import AccordionTest from './components/information/AccordionTest';
import { CssBaseline } from '@material-ui/core';
import MenuNavigation from './components/navigation/MenuNavigation';



const simpleTestButtonStyleBlue = false;



// create custom theme overriding properties
// override usando estrutura em https://material-ui.com/customization/default-theme/#default-theme
const myTheme = createMuiTheme({
  palette: {
    primary: purpleColor,
    secondary: greenColor
  }
});



const noTheme = createMuiTheme({
  
});

function App() {
  
  // state hooks
  const [darkMode, setDarkMode] = useState(false);

  // altera para o dark theme da paleta de cores do theme
  const darkTheme = createMuiTheme({
    
    palette: {
      type: darkMode ? "dark" : "light"
    }

  });


  return (
    <ThemeProvider theme={darkTheme}>

      <CssBaseline/>

      {
        /**
         * Paper declarado para envelopar toda a App com altura de 100% de altura vertical
         * para poder alterar para Dark Theme todo o site
         */
      }
      <Paper style={{ height: "100vh"  }}>
        <Router>  
        
        <Grid container direction="column" >
          <Grid item xs={12}>
            <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
          </Grid>
          
          <Switch>
            <Route exact path="/makestyle">
               <SimpleTest blue={simpleTestButtonStyleBlue }/>
            </Route> 
            <Route path="/button">
               <ButtonTest />
            </Route>
            <Route path="/typo">
                <TypographyTest />
            </Route>

            <Route path="/paper">
                <PaperTest />
            </Route>

            <Route path="/grid">
                <GridTest />
            </Route>
            <Route path="/card">
                <CardPositioning />
            </Route>
            <Route path="/table">
                <SimpleTable />
            </Route>
             
             <Route path="/tabs/:page" render={ props => <TabTest {...props} />} />

             <Route extact path="/drawer/about">
                <AboutPage/>
             </Route>
             <Route extact path="/drawer">
                <DrawerTest/>
             </Route>
             <Route extact path="/breadcrumb">
                <BreadCrumbTest />
             </Route>
             <Route extact path="/accordion">
                <AccordionTest/>
             </Route>

             <Route extact path="/menunavigation/about">
                <AboutPage/>
             </Route>
             <Route extact path="/menunavigation/content">
                <ContentPage/>
             </Route>
             <Route extact path="/menunavigation">
                <MenuNavigation/>
             </Route>
             

           
          </Switch>

        </Grid>
        
        </Router>  

      </Paper>
  

    </ThemeProvider>  
  );
}

export default App;
