import React from 'react'

function Cart() {
return (
  <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
           <CartTotal />
          </section>
)
}


export default Cart;