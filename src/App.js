import React from 'react';
import logo from './logo.svg';
import Main from './components/Main';
import './App.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import initialState from './redux/initialState';
import reducer from './redux/redux-reducer';

const store = createStore(reducer, initialState);

function App() {
  return (
    <div >
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
