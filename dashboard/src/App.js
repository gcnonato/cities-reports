import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';
import GlobalStyle from './styles/global';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/shards-dashboards.1.1.0.min.css';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/cities-reports">
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
