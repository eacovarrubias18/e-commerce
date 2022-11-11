import React from "react"
import ShopCart from "./ShopCart"
import "./style.css"
import Filter from "./Filter"

const MainShop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <Filter />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Nuestro Catalogo</h2>
              </div>
              <div className='heading-right row '>
                <span>Ver mas</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainShop