import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import {Carousel} from 'react-responsive-carousel'
//Assets
import FirstSlide from '../../../assets/carousel/Carousel-1.png'
import SecondSlide from '../../../assets/carousel/Carousel-2.png'
//Components
import {
  CarouselImage,
  CarouselContainer,
  TextInCarouselImage,
  TitleTextInCarouselImage,
} from './elements'

const CustomCarousel = () => {
  return (
    <CarouselContainer>
      <Carousel swipeable={true} emulateTouch={true} showStatus={false}>
        <div>
          <TextInCarouselImage>Welcome to</TextInCarouselImage>
          <TitleTextInCarouselImage>ShonenPlays</TitleTextInCarouselImage>
          <CarouselImage src={FirstSlide} alt="carousel-1" />
        </div>
        <div>
          <TextInCarouselImage>SALE!</TextInCarouselImage>
          <TitleTextInCarouselImage>ShonenPlays</TitleTextInCarouselImage>
          <CarouselImage src={SecondSlide} alt="carousel-2" />
        </div>
      </Carousel>
    </CarouselContainer>
  )
}

export default CustomCarousel
