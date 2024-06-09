import React, { useState } from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import ExploreMenue from '../../Components/ExploreMenue/ExploreMenue'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import ApDownload from '../../Components/AppDownload/ApDownload'
const Home = () => {
  const[cat,setcat] = useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenue cat={cat} setcat={setcat}/>
        <FoodDisplay cat={cat}/>
        <ApDownload/>
        
        
    </div>
  )
}

export default Home
