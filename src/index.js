import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";

import { createTextChangedAction } from "./actions";
import reducer from "./reducer";
import App from './App';

import 'getbase/dist/css/styles.css';

const store = createStore(reducer);

const render = () => ReactDOM.render(
  <App
      text={ store.getState() }
      onTextChange={ (newText) => store.dispatch(createTextChangedAction(newText)) }
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
