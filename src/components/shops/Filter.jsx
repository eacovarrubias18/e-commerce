import React from "react"
import RangeSlider from "./RangeSlider"

const Filter = () => {
 
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Filtros</h1>
        </div>
        
        <div >
            <RangeSlider></RangeSlider>
        </div>

      </div>
    </>
  )
}

export default Filter