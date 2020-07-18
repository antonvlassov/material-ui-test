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

// router
// react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
          </Switch>

        </Grid>
        
        </Router>  

      </Paper>
  

    </ThemeProvider>  
  );
}

export default App;
