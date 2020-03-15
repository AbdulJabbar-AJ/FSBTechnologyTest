import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import roorReducer from './reducers/reducer';
import App from './components/App';
import './styles/index.scss';
import './api/websockets'

const store = createStore(roorReducer, applyMiddleware(logger, thunk))
const root =  document.getElementById('root')

ReactDOM.render(<Provider store={store}><App /></Provider>, root);
