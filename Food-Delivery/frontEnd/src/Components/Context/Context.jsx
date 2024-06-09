import React, { useEffect, useState } from "react";
import { createContext }  from "react";
import { food_list } from "../../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{
    const [cartItem,setcartItem] = useState({})
    const addCart = (itemId)=>{
        if(!cartItem[itemId]){
            setcartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }
    const removeCart = (itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
    useEffect(()=> {
        console.log(cartItem);
    },[cartItem])

    const cartTotalAmount = ()=>{
        let totalAmount = 0;
        for (const item in cartItem){
            if(cartItem[item]>0){
                let iteminfo = food_list.find((product)=>product._id === item);
                totalAmount +=iteminfo.price *cartItem[item];
            }
        }
        return(
            totalAmount
        )
    }

    
    const contextValue ={
        food_list,
        cartItem,
        setcartItem,
        addCart,
        removeCart,
        cartTotalAmount 
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider