import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import api from './services/api';
import "./App.css";
import Home from "./components/Home/Home";
import ProductDetailCard from './components/ProductDetailsCard/ProductDetailsCard'; 
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() { 
  return (
  <ApolloProvider client={api}>
     <Router>
     <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/product/:id">
        <ProductDetails />
      </Route>

    </Switch>
    </Router>
  </ApolloProvider>
  )  
};

export default App;
