import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from '../redux/reducers';

const store = applyMiddleware(promise)(createStore)(reducers)

const title = '';

ReactDOM.render(
    <Provider store={store}>
        <App title={title} />
    </Provider>,

    document.getElementById('app')
);
module.hot.accept();
