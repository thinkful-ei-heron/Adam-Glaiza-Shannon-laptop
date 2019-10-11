import React from 'react'
import CartItem from '../CartItem/CartItem'
import CartTotal from '../CartTotal/CartTotal'

function Cart(props) {
  return (
  Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartItem featureHash={featureHash} selectedOption={selectedOption} feature={feature} />
        <CartTotal selected={props.selected} />
      </section>
    )
  })
  )}


export default Cart;