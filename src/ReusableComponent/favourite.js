import React, { useState } from "react";


export default function Favourite() {
  const [cart, setCart] = useState("Add to Cart");
  const [button, setButton] = useState("btn btn-warning")
  const addtoCart = () => {
    if (cart === "Add to Cart"){
      setCart("Added to Cart")
      setButton("btn btn-light")
    }
    else if (cart === "Added to Cart"){
      setCart("Add to Cart")
      setButton("btn btn-warning")
    }
  }
  return (
    <div>
      <button className = {button} onClick={addtoCart}>{cart}</button>
    </div>
  );
}

