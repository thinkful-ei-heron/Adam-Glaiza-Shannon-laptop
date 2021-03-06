import React from 'react'
import CartItem from '../CartItem/CartItem'
import CartTotal from '../CartTotal/CartTotal'
import './Cart.css'

function Cart(props) {

    return (
      <section className="main__summary">
        <h2>Your cart</h2>

         { Object.keys(props.selected).map((feature, idx) => {
        
          const featureHash = feature + '-' + idx;
          const selectedOption = props.selected[feature];

          return ( 
          <CartItem featureHash={featureHash} selectedOption={selectedOption} feature={feature} key={idx}/>
          )})
        }
    
        <CartTotal selected={props.selected} />
      </section>
    )
}


export default Cart;