import React from "react"

const Catg = () => {
  const data = [
    {
      
      cateName: "Harry Potter",
    },
    {
      
      cateName: "El Señor de los Anillos",
    },
    {
      
      cateName: "Maze Runner",
    },
    {
      
      cateName: "Los Juegos del Hambre",
    },
    {
      
      cateName: "Wigetta",
    },
    {
      
      cateName: "Game of Thrones",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Grandes Sagas</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>Ver Todo</button>
        </div>
      </div>
    </>
  )
}

export default Catg
