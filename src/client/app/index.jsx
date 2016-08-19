import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import mainReducer from './reducers/reducer.js';

import StartWorkout from './modules/startWorkout.jsx';
import Dashboard from './modules/dashboard.jsx';
import CreateWorkouts from './modules/createWorkouts.jsx';

const store = createStore(
    combineReducers({main: mainReducer}),
applyMiddleware(thunk));

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={StartWorkout}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/add-workout" component={CreateWorkouts}/>
    </Router>
  </Provider>
), document.getElementById('app'));
