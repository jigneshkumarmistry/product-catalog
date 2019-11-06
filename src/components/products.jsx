import React, { Component } from 'react';

import ProductListHeader from '../components/header';
import ProductList from '../components/list';
import Cart from '../components/cart';

var productItems = [];
productItems.push({index: 1, value: "Product 1"});
productItems.push({index: 2, value: "Product 2"});
productItems.push({index: 3, value: "Product 3"});

class ProductCatalog extends Component {

    constructor (props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.state = {productItems: productItems, cartItems: 0};
    }

    addToCart(productItem) {
        
        this.setState({cartItems: 1});
    }

    removeFromCart(productItem) {
        this.setState({cartItems: '0'});
    }

    render () {
      return (
        <div id="main">
            <ProductListHeader />
            <Cart items={this.state.cartItems} />
            <ProductList items={this.state.productItems} cartItems={this.state.cartItems} />
        </div>
      );
    }
}

export default ProductCatalog;