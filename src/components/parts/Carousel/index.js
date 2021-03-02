import React from 'react'
import {subtitle, title} from './Carousel.module.scss'
//Assets
import FirstSlide from '../../../assets/carousel/Carousel-1.png'
import SecondSlide from '../../../assets/carousel/Carousel-2.png'
//Components
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import {Carousel} from 'react-responsive-carousel'

const CustomCarousel = () => {
  return (
    <Carousel swipeable={true} emulateTouch={true} showStatus={false}>
      <div>
        <p className={subtitle}>Welcome to</p>
        <p className={title}>ShonenStyles</p>
        <img src={FirstSlide} alt="carousel-1" />
      </div>
      <div>
        <p className={subtitle}>SALE!</p>
        <p className={title}>ShonenStyles</p>
        <img src={SecondSlide} alt="carousel-2" />
      </div>
    </Carousel>
  )
}

export default CustomCarousel
