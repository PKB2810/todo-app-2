import React from "react";
import logo from "./logo.svg";
import Main from "./components/Main";
import "./App.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import initialState from "./redux/initialState";
import reducer from "./redux/redux-reducer";
import styled from "styled-components";

const rootReducer = combineReducers({ todoList: reducer });

const store = createStore(rootReducer, initialState);
function App() {
  return (
    <div id="parent">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
