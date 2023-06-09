import React from 'react';
import {createRoot}from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";


const app = document.getElementById('root');

// create a root
const root = createRoot(app);

//render app to root
root.render(<Provider store={store}>
  <App />
  </Provider>);

