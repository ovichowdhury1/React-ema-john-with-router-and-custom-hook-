import { getStoreCart } from "../utilities/fakedb";

export const productAndCartLoader = async () =>{
    //get products
    const productsData = await fetch('products.json');
    const products = await  productsData.json();
    
    //get cart 
    const saveCart = getStoreCart();
    const initailCart = [];
    // console.log(products);
    for(const id in saveCart){
       
           const addedProduct = products.find(product=> product.id === id);
           if(addedProduct){
                const quantity = saveCart[id];
                addedProduct.quantity = quantity;
                initailCart.push(addedProduct);
           }         
    }

    
    

    return {products: products,initailCart: initailCart};
}