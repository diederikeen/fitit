import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import mainReducer from './reducers/reducer.js';

import App from './modules/app.jsx';

const store = createStore(
    combineReducers({main: mainReducer}),
applyMiddleware(thunk));

render((

    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
), document.getElementById('app'));
