import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
               <div className='box d_flex top' key={index}>
                <div className='right'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary'>{value.btn}</button>
                </div>
                <div className='left'>
                  <img className="imgMaxsz" src={value.cover} alt='' />{}
                </div>
              </div> 
              
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
