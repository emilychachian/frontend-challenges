import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import api from './services/api';
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() { 
  return (
  <ApolloProvider client={api}>
     <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:productId" component={ProductDetails} />
      </Switch>
    </Router>
  </ApolloProvider>
  )  
};

export default App;
