import React, { Component } from 'react';

class ProductListItem extends Component {
    constructor(props) {
      super(props);
      this.onClickAddToCart = this.onClickAddToCart.bind(this);
      this.state = { cartItems: this.props.cartItems}
      console.log(this.props.cartItems)

    }
    
    onClickAddToCart() {
      //var index = parseInt(this.props.index);
      console.log("Product Id" + this.props.cartItems);
      this.setState({cartItems: 1});
    }

    render () {
      
      return(
        <li className="list-group-item ">
          <div >
            {this.props.item.value}
            <button type="button" onClick={this.onClickAddToCart}>AddToCart</button>
          </div>
        </li>     
      );
    }
  }

  export default ProductListItem;