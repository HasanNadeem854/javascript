import React, { useContext, useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/Context'
const FoodItem = ({id,name,price,description,image}) => {
     
     const {cartItem,addCart,removeCart} = useContext(StoreContext)
  return (
    <div>
         <div className="food-item">
            <div className="food-item-image-container">
              <img src={image} className = "food-item-image"alt="" />
              {!cartItem[id]
                  ?<img src={assets.add_icon_white} alt="" className='add' onClick={() => addCart(id)}  />
                  :<div className='greater-than-one'>
                    <img src={assets.add_icon_green} alt="" className="add-one" onClick={() => addCart(id)} />
                    <p className="conut-display">{cartItem[id]}</p>
                    <img src={assets.remove_icon_red} alt="" className="remove-one" onClick={() => removeCart(id)} />
                  </div>
              }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
         </div>
    </div>
  )
}

export default FoodItem