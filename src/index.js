import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './js/redux/reducer';
import App from './js/components/App';
import './styles/index.scss';
import './js/api/websockets'


const logger = createLogger({ collapsed: true })
export const store = createStore(rootReducer, applyMiddleware(thunk, logger))
const root =  document.getElementById('root')

ReactDOM.render(<Provider store={store}><App /></Provider>, root);
