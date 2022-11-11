import React from "react"

const Categories = () => {
  const data = [
    {
      //cateImg: "./images/category/cat1.png",
      cateName: "Literatura Clasica",
    },
    {
      //cateImg: "./images/category/cat2.png",
      cateName: "Ciencia Ficcion",
    },
    {
      //cateImg: "./images/category/cat3.png",
      cateName: "Arte",
    },
    {
      //cateImg: "./images/category/cat4.png",
      cateName: "Autoayuda",
    },
    {
      //cateImg: "./images/category/cat5.png",
      cateName: "Diccionaro y Referencia",
    },
    {
      // cateImg: "./images/category/cat6.png",
      cateName: "Mangas y Comics",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              {/* <img src={value.cateImg} alt='' /> */}
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
