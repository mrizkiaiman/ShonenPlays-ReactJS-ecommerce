import React from 'react'
import './styles.scss'
//Components
import {Parts} from '../../../components'
import {Features, Trending, Partners, Promos} from './components'

export default function Home() {
  const {Navbar, Carousel, Glider} = Parts
  return (
    <>
      <div className="homeContainer">
        <div>
          <Navbar />
          <Carousel />
          <Features />
          <Trending />

          <Glider />
          <Promos />
          <Partners />
          <Glider />
        </div>
      </div>
    </>
  )
}
