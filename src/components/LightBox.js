import React,{useState} from "react"
import thumb1 from "../images/image-product-1-thumbnail.jpg"
import image1 from "../images/image-product-1.jpg"
import thumb2 from "../images/image-product-2-thumbnail.jpg"
import thumb3 from "../images/image-product-3-thumbnail.jpg"
import thumb4 from "../images/image-product-4-thumbnail.jpg"
import previous from "../images/icon-previous.svg"
import next from "../images/icon-next.svg"
import overlayclose from "../images/icon-close.svg"




function LightBox() {
const gallery = document.querySelectorAll('.pic');
const mainImg= document.querySelector('.image-1');
gallery.forEach(img => {
    img.addEventListener('click', onThumbClick);
});
function onThumbClick(event) {

    gallery.forEach(img => {
        img.classList.remove('active');
    });
    
    event.target.parentElement.classList.add('active');
    
    mainImg.src = event.target.src.replace('thumb-gallery', '');
}
   const[show,setShow]=useState("show-none");
    return ( 
    <div className="item-2">
    <div className = "lightbox" >
            <img onClick={()=>{setShow("show")}} className = "image-1"src = { image1 } alt = "shoe "  />
           
             <div className = "thumb-gallery" >
            <div className = "pic active" >
            <img src = { thumb1 } alt = "thumb" />
            </div>
             <div className = "pic" >
            <img src = { thumb2 } alt = "thumb" />             
            </div> < div className = "pic" >
            <img src = { thumb3 }alt = "thumb" />
            </div> 
            <div className = "pic" >
            <img src = { thumb4 } alt = "thumb" />
            </div>
            </div> 
            </div>
            <div className={show}>
                <button onClick={()=>{setShow("show-none")}}>X</button>
            <div className = "lightbox" >
            <img className = "image-1"src = { image1 } alt = "shoe "  />
           
             <div className = "thumb-gallery" >
            <div className = "pic active" >
            <img src = { thumb1 } alt = "thumb" />
            </div>
             <div className = "pic" >
            <img src = { thumb2 } alt = "thumb" />             
            </div> < div className = "pic" >
            <img src = { thumb3 }alt = "thumb" />
            </div> 
            <div className = "pic" >
            <img src = { thumb4 } alt = "thumb" />
            </div>
            </div> 
            </div>

            
            </div>

            </div>
            );
            };
            export default LightBox