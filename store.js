import {combineReducers, createStore, applyMiddleware} from 'redux';
import userReducer from './reducers/userReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const getUserReducer = (state = {
	status: null,
	user: []
}, action) => {
	switch(action.type){
		case 'FETCHING_STARTED':
			state = {
				status: "just started"
				
			};
		break;
		case 'RECEIVING':
		state = {
			status: "receiving",
			user: action.payload
		};
		break;	
		case 'SOME_ERROR':
		state = {
			status: "error occured " + action.payload,

		};
		break;
		
	}
	return state;
};

const store = createStore(combineReducers({userReducer, getUserReducer}), 
{}, applyMiddleware(thunk, logger()));


store.dispatch((dispatch) => {
	
	dispatch({type: "FETCHING_STARTED"});
	axios
	.get('http://jsonplaceholder.typicode.com/photos')
	.then((response) => {
		dispatch({type: "RECEIVING", payload: response.data});
		})
	.catch((err) => {
			dispatch({type: "SOME_ERROR", payload: err});
		});
});
export default store;