import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// React Router dependencies
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import store from './store';

import App from './main';

const Main = () => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <div className="main">
          <Route path="/" component={App} />
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
