import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bulma/css/bulma.min.css';
import "./index.css";
import App from "./components/App";

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { appReducer } from './reducers/index';



const logger = createLogger();
const store = createStore(appReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
   <App />
</Provider>, document.getElementById("root"));
