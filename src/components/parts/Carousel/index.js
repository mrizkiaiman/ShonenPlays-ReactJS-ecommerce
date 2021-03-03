import React from 'react'
import {
  subtitle,
  title,
  firstSlide,
  secondSlide,
  thirdSlide,
  fourthSlide,
  textContainer,
} from './Carousel.module.scss'
//Components
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import {Carousel} from 'react-responsive-carousel'

const CustomCarousel = () => {
  return (
    <Carousel swipeable={true} emulateTouch={true} showStatus={false}>
      <div className={firstSlide}>
        <div className={textContainer}>
          <p className="text-white text-3xl font-bold text-left">Welcome to</p>
          <p className="text-white text-6xl font-bold text-left">
            ShonenStyles
          </p>
          <button className="w-1/6 h-16 bg-d-green rounded mt-7">
            <p className="text-white font-bold text-xl">More</p>
          </button>
        </div>
      </div>
      <div className={secondSlide}>
        <div className={textContainer}>
          <p className={subtitle}>Welcome to</p>
          <p className={title}>ShonenStyles</p>
          <button className="w-1/6 h-16 bg-d-green rounded mt-7">
            <p className="text-white font-bold text-xl">More</p>
          </button>
        </div>
      </div>
      <div className={thirdSlide}>
        <div className={textContainer}>
          <p className={subtitle}>Welcome to</p>
          <p className={title}>ShonenStyles</p>
          <button className="w-1/6 h-16 bg-d-green rounded mt-7">
            <p className="text-white font-bold text-xl">More</p>
          </button>
        </div>
      </div>
      <div className={fourthSlide}>
        <div className={textContainer}>
          <p className={subtitle}>Welcome to</p>
          <p className={title}>ShonenStyles</p>
          <button className="w-1/6 h-16 bg-d-green rounded mt-7">
            <p className="text-white font-bold text-xl">More</p>
          </button>
        </div>
      </div>
    </Carousel>
  )
}

export default CustomCarousel
