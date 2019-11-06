import React, { Component } from 'react';

class Cart extends Component {
    
    constructor (props) {
        super(props);
        this.state = {cartItems: props.items ? props.items : 0};
        console.log(props.items)
    }

    render () {
        return (
            <div>
                <span>Cart Items: </span>
                <span>{this.props.items} </span>
            </div>
        );
    }
}

export default Cart;