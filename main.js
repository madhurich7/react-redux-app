import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Imp';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import store from './store';




ReactDOM.render(<Provider store={store}><Main/></Provider>,
 document.getElementById('app'));