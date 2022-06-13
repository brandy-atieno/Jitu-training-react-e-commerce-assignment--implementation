import React, { useState } from "react"
import './index.css';
import "./App.css"
import Header from "./components/Header"
import Body from "./components/Body"
import LightBox from "./components/LightBox";




function App() {

const[count,setCount]=useState(0);
const [cartCount, setCartCount] = useState(0);

    return ( 
            <div className = 'App' >
        <Header  cartCount={cartCount} setCartCount={setCartCount}/>
        <div className="section">
            <div className="section-1">
 <LightBox />
 < Body count={count} setCount={setCount} cartCount={cartCount} setCartCount={setCartCount} />

            </div>
    
      

        </div>
        








        </div> 
        
    );
}

export default App;