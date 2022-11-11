import React from "react"
import './staticStyle.css'
import QAGroup from './QAGroup'

const QAinf = ( ) => {
  return (
    <>
      <section className='shop background'>
        <h1 className="title">Preguntas Frecuentes y Dudas</h1>
          <div className="infBox">
            <QAGroup></QAGroup>
         </div>
       
      </section>
    </>
  )
}

export default QAinf
