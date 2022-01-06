// Style
import './css/index.css';

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// App
import App from './js/App';

// Store
import store from './js/store';

// 
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
