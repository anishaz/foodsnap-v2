import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './main';

const Main = () => (
  <MuiThemeProvider>
    <div className="main">
      <App />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
