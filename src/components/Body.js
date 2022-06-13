import logo from "../images/logo.svg"
import cart from "../images/icon-cart.svg"

import overlayclose from "../images/icon-close.svg"
import Minuslogo from "../images/icon-minus.svg"
import Pluslogo from "../images/icon-plus.svg"
import React, { useState } from "react"



function Body({count, setCount,cartCount,setCartCount}) {
    

 
     

    return (
         <>


        <section className = "product" >
        < h1 className = "company-name" > Sneaker company </h1>

        <h2 className = "title" > Fall Limited Edition Sneakers </h2>
         <p className = "description" >
        These low - profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they 'll withstand everything 
        the weather can offer. </p>

        <div className = "price" > <strong > $125 .00 </strong></div >
        <button className = "discount" > 50 % </button>

        <div className = "old-price" > <strike > $250 .00 </strike></div >


        <button className = "main-butn" >
        <button className = "minus-icon"
        onClick = {
            () =>{count>0? setCount(count-1) :setCount(count)}
        }>
         
        <img className = "minus" src = { Minuslogo } alt = "minus-sign"/>
        </button> 
        <div className = "zero" > { count } </div> 
        <button className = "plus-icon" onClick = {() => setCount(count+1)} >
        <img className = "plus"src = { Pluslogo }  alt = "plus-sign" />
        </button> 
        <buttton className = "cart-add" onClick = {() => {setCartCount(cartCount+count);setCount(0)}} >
      
        <img className = "cart" src = { cart } />
          <p > Add to cart </p> 
          </buttton > 
          </button>
          

       </section>
         </>
        
    )
}

export default Body