import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { store } from './redux';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    
    <Provider store={store}>
        <AppContainer />
    </Provider>
    ,
    document.getElementById('root'));

registerServiceWorker();
