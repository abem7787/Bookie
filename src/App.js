import './App.css';
import Home from "./components/Home"
import React from 'react'
import ProductList from "./components/Products"
import Register from "./components/Register"
import Cart from "./components/Cart"
import List from "./components/List"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Success from "./pages/Success";
import { useSelector } from "react-redux";



const App = () => {

return(
<Switch>
<Router>

<Route exact path="/">
<Home/>
</Route>

<Route path="/products/:category">
<ProductList/>
</Route>

<Route path="/cart">
 <Cart/>
</Route>

<Route path="/register">
 <Register/>
</Route>

<Route path="/list">
 <List/>
</Route>

</Router>
</Switch>
)
 
  

};

export default App;

