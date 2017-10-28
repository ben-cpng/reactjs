import React from 'react';
//import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store';
import './index.css';
import SearchApp from './components/SearchApp';

ReactDOM.render(
<Provider store={store}>
      <ConnectedRouter history={history} >
        <div>
          <SearchApp />
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);