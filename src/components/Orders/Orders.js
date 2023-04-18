import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {

    const {products,initailCart} = useLoaderData();
    const [cart,setCart] = useState(initailCart);
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();

    }
    const handleRemoveButton = (id) => {
        const remainning = cart.filter(product => product.id !== id);
        setCart(remainning);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
               {

                cart.map(product =><ReviewItem
                key={product.id}
                product={product}
                handleRemoveButton={handleRemoveButton}
                >

                </ReviewItem> )   
               }
               {
                   cart.length === 0 && <h2>No item here From: please <Link to="/">Shop more</Link></h2> 
               }
            </div>
            <div className='cart-container'>
               <Cart clearCart={clearCart} cart={cart} >
                
               </Cart>
            </div>
        </div>
    );
};

export default Orders;