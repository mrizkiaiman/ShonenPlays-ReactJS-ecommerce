import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import {Carousel} from 'react-responsive-carousel'
//Components
import {CarouselImage, CarouselContainer} from './elements'

const CustomCarousel = () => {
  return (
    <CarouselContainer>
      <Carousel swipeable={true} emulateTouch={true} showStatus={false}>
        <CarouselImage
          src="https://cdn.prty.jp/wp/wp-content/uploads/2018/03/top_180315.jpg"
          alt="carousel-1"
          className="w-40 h-40"
        />

        <CarouselImage
          src="https://cdn.prty.jp/wp/wp-content/uploads/2018/03/top_180315.jpg"
          alt="carousel-2"
          className="w-40 h-40"
        />

        <CarouselImage
          src="https://cdn.prty.jp/wp/wp-content/uploads/2018/03/top_180315.jpg"
          alt="carousel-3"
          className="w-40 h-40"
        />
      </Carousel>
    </CarouselContainer>
  )
}

export default CustomCarousel
