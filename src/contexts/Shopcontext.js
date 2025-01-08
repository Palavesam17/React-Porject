import React, { createContext, useState } from 'react'
import all_product from '../components/Assets/all_product';

 export const ShopContext = createContext(null);

 const getdefaultCart=()=>{
    let Cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        Cart[index]=0;
        
    }
    return Cart;
}


const ShopContextProvider =(props) => {

    const [CartItem,setCartItems]=useState(getdefaultCart());

    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount=0;
        for (const item in CartItem)
        {
            if(CartItem[item]>0)
                {
                    let itemInfo = all_product.find((product)=>product.id===Number(item))
                    totalAmount += itemInfo.new_price * CartItem[item];
                }   
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in CartItem)
            {
                if(CartItem[item]>0)
                    {
                        totalItem+= CartItem[item];
                    }
            }
            return totalItem
    }
    

    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,CartItem,addToCart,removeFromCart};

    return(

            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
    )
}
export default  ShopContextProvider;
