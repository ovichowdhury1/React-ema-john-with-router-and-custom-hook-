import React from 'react';
import './Cart.css';
const Cart = ({cart,clearCart,children}) => {
//    console.log(cart)
   let total = 0 ;
   let shipping = 0;
   let quantity = 0;
   for(const product1 of cart){
    quantity = quantity + product1.quantity;
    total = total+product1.price * product1.quantity;
    shipping =  shipping + product1.shipping;
   }
    const tax = parseFloat((total*0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
             <h4>Order Summary</h4>
             <p>Selected Items : {quantity}</p>
             <p>Total Price: $ { total}</p>
             <p>Total Shipping Charge:${shipping}</p>
             <p>Tax:{tax}</p>
             <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
             <button onClick={clearCart}>Clear</button>
             {children}
        </div>
    );
};

export default Cart;