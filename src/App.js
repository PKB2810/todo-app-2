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
const ParentDiv = styled.div`
  background-color: #d6f441;

  height: 100%;
`;
function App() {
  return (
    <ParentDiv>
      <Provider store={store}>
        <Main />
      </Provider>
    </ParentDiv>
  );
}

export default App;
