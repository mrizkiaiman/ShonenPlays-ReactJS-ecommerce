import React from 'react'
import {container} from './Home.module.scss'
//Components
import {Parts} from '../../../components'
import {Features, Trending, Partners, Promos, Newsletter} from './components'

export default function Home() {
  const {Navbar, Carousel, Glider, Footer} = Parts
  return (
    <>
      <div className={container}>
        <div>
          <div className="z-20">
            <Navbar />
          </div>
          <div className="z-0">
            <Carousel />
          </div>
          <Features />
          <Trending />
          <Glider />
          <Promos />
          <Partners />
          <Glider />
          <Newsletter />
        </div>
      </div>
      <Footer />
    </>
  )
}
