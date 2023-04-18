import React, { useEffect, useState } from 'react';
import './shop.css';
import Product from '../product/Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getStoreCart } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData();
    // const [products,setProducts] = useState([]);

    const [cart,setCart] = useState([]);
    // useEffect(()=>{
    //     // console.log('product load before fetch');
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // },[]);
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();

    }
    const handleAddToCart = (selectProduct)=>{
       let newCart = [];
       const exists = cart.find(product => product.id === selectProduct.id);
       if (!exists) {
              selectProduct.quantity = 1;
              newCart =  [...cart,selectProduct];
       } else {
             const rest = cart.filter(product => product.id !== selectProduct.id );
             exists.quantity = exists.quantity + 1;
             newCart =  [...rest,exists];
       }
       
       setCart(newCart);
       addToDb(selectProduct.id);
    };
     useEffect(()=>{

        const storeCart = getStoreCart();
        //   console.log(storeCart);
          const saveCart = [];
          for (const id in storeCart) {
               const addProduct = products.find( product => product.id === id );
                if(addProduct){
                    const quantity = storeCart[id];
                    addProduct.quantity = quantity;
                    saveCart.push(addProduct);

                }
            
          }
          setCart(saveCart)
        //   console.log('local storage finished')
    },[products]);
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =><Product
                    key={product.id}
                    product={product}
                    handleAddToCart ={handleAddToCart }
                    >

                    </Product>)
                }
            </div>
            <div className="cart-container">
               <Cart clearCart={clearCart} cart={cart}>
               <Link to="/orders">
                      <button>Review Order</button>
                </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;