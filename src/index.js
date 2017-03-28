import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducer";
import AppContainer from './containers/AppContainer';

import 'getbase/dist/css/styles.css';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={ store }>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
