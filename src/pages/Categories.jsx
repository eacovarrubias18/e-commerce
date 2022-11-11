import React from "react"
import MainShop from "../components/shops/MainShop"



const Categories = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>

      <MainShop shopItems={shopItems} addToCart={addToCart} />
    </>
  )
}

export default Categories