import React from 'react'
import "./ExploreMenue.css"
import  { menu_list } from "../../assets/assets"

const ExploreMenue = ({cat,setcat}) => {
  return (
    <div className='explore-menue' id='explore-menue'>
        <h2>Explore our menu</h2>
        <p className='explore-menue-text'>Embark on a gastronomic journey as you explore the intricate flavors and delightful offerings of our menu. From tantalizing appetizers to sumptuous main courses and decadent desserts, each dish tells a story of passion and creativity. Join us and indulge in a culinary experience like no other, where every bite is a celebration of flavor and tradition.</p>
        <div className='explore-menue-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={(e) => { e.preventDefault(); setcat(prev => prev === item.menu_name ? "All" : item.menu_name); }} key={index} className='explore-menue-list-items'>
                        <img className={cat===item.menu_name?"active":""} src={item.menu_image} alt="" /> 
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
            }
        </div>
        <hr/>
      
    </div>
  )
}

export default ExploreMenue
