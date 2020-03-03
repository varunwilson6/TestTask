import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import store from "./store"
import './App.css';
import CartContainer from './containers/cartContainer';
import ProductsContainer from './containers/productsContainer'
import HeaderedLayout from "./containers/headerLayout"

function RooTContainer() {
  return (
    <Provider store = { store } >
      <BrowserRouter>
        <Switch>
          <HeaderedLayout exact path= "/" ComponentToRender={ProductsContainer} />
          <HeaderedLayout path="/mycart" ComponentToRender={CartContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default RooTContainer;
