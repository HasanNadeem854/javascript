import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../Components/Context/Context'
const Cart = () => {

  const{food_list,removeCart,cartItem,cartTotalAmount} = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-titles">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItem[item._id]>0){
            return(
              <div className="cart-items-titles cart-item-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price*cartItem[item._id]}</p>
                <p className='cross' onClick={()=>removeCart(item._id)}>x</p>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <p>Cart Totals</p>
          <div className="car-total-details">
            <p>SubTotal</p>
            <p>${cartTotalAmount()}</p>
          </div>
          <div className="car-total-details">
            <p>Delivery Fees</p>
            <p>${2}</p>
          </div>
          <div className="car-total-details">
            <p>Total</p>
            <p>${cartTotalAmount()+2}</p>
          </div>
        </div>
        <button className='proceed'>Proceed To Checkout</button>
        <div className="promo-code">
          <div>
            <p>If u have promo code, pls enter it here</p>
            <div className="promo-code-input">
              <input type="text" name="" id="" placeholder='Promo Code'/>
              <button className='abc'>Submit</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Cart
