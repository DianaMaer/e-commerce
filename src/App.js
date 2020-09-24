import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
    }
  }

  componentDidMount(){
    this.fetchProducts();
  }

  fetchProducts = () =>{
    fetch('https://floating-temple-56492.herokuapp.com/products')
      .then(res => res.json())
        .then(data => this.setState({products : data}));
  }

  render(){
    const { products} = this.state
    return (
      <div className="App">
        <Navbar />
        <Switch>
         <Route exact path="/" render ={() => <Home products={products} />} />
         <Route path="/cart" component={Cart} />
         <Route path="/products/:id" component={ProductDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
