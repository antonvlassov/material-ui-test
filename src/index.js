import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// theming
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// colors: definições padrões do Material UI para cada cor a ser usada em createMuiTheme
// para cada cor, são definidas os 4 cores (main, dark, light, etc) para cada objeto cor
import purpleColor from '@material-ui/core/colors/purple';
import greenColor from '@material-ui/core/colors/green';

import Paper from '@material-ui/core/Paper';

// create custom theme overriding properties
// override usando estrutura em https://material-ui.com/customization/default-theme/#default-theme
const myTheme = createMuiTheme({
  palette: {
    primary: purpleColor,
    secondary: greenColor
  }
});

// altera para o dark theme da paleta de cores do theme
const darkTheme = createMuiTheme({
  
  palette: {
    type: "dark"
  }

});

const noTheme = createMuiTheme({
  
});

ReactDOM.render(
  <React.StrictMode>

    <ThemeProvider theme={darkTheme}>

      {
        /**
         * Paper declarado para envelopar toda a App com altura de 100% de altura vertical
         * para poder alterar para Dark Theme todo o site
         */
      }
      <Paper style={{ height: "100vh"  }}>
         
          <App />

      </Paper>

      

    </ThemeProvider>  
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
