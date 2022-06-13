import React from "react"
import logo from "../images/logo.svg"
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import thumb1 from "../images/image-product-1-thumbnail.jpg"
import bdelete from "../images/icon-delete.svg"
import { useState } from "react"



function Header({ cartCount,setCartCount}) {
    const [cartClass, setCartClass] = useState("cart-none")



    return ( 
    < div >

            < nav >
            <img className = "nav-logo"src = { logo } alt = "sneaker"/>
            <ul className = "items" >
            <li > < a href = "#" > Collections </a></li >
            <li > < a href = "#" > Men </a></li >
            <li > < a href = "#" > Women </a></li >
            <li > < a href = "#" > About </a></li >
            <li > < a href = "#" > Contact </a></li >
            </ul>


            <div className = "cart-avatar-group" >

            < img onClick = {
                () => {
                    cartClass === "cart-none" ? setCartClass("cart-show") :
                        setCartClass("cart-none")
                }
            }
            className = "cart"
            src = { cart }
            alt = "cart-icon" />
            <div className = "counter" > {cartCount}</div>

            < img className = "avatar"
            src = { avatar }
            alt = "avatar photo" />

            </div>
             </nav >
              <div className = { cartClass } >
           <div className="header"> < h1 >  Cart </h1> </div>{
        cartCount=== 0 ? < div className="msg" > Your cart is empty </div>:
             <div className = "products-in-cart" >
            <div className = "item" >
            <img className = "product-img"
            src = { thumb1 }
            alt = "product 1 thumb" />
            <div className = "details" >
            <div className = "product-name" > Autumn Limited Edition... </div> 
            < div className = "price-group" >
            < div className = "price" > $125 .00 </div> 
            <div className = "count" > 3 </div>
             <div className = "total-amount" > $375 .00 </div> 
             </div > </div>
              <img className = "btnDelete"
            src = { bdelete } onClick={()=>setCartCount(0)}
            alt = "icon delete" />

            </div>

            < button className = "checkout " onClick={()=>setCartCount(0)} > Checkout </button> 
             </div >



        } 


    </div> </div >




);


}
export default Header