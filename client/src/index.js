import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

/**
 * Importação do Materialize CSS
 */
import 'materialize-css/dist/css/materialize.min.css';

import './index.css';

import App from './NewApp';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
