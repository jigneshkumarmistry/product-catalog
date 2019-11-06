import React, { Component } from 'react';
import ProductListItem from '../components/listItem';

class ProductList extends Component {
    
    constructor (props) {
        super(props);
        this.state = {productItems: props.items, cartItems: props.cartItems};
    }

    render () {
        var items = this.props.items.map((item, index) => {
            return (
              <ProductListItem key={item.index} item={item} index={item.index} cartItems={this.props.cartItems} />
            );
          });
        return (
            <ul className="list-group"> {items} </ul>
        );
    }
}

export default ProductList;