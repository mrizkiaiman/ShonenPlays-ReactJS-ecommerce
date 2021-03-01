import React from 'react'
import './style.scss'
//Components
import {Parts} from '../../../components'
import {Feature, Trending} from './components'

export default function Home() {
  const {Navbar, Carousel} = Parts
  return (
    <>
      <div className="homeContainer">
        <div>
          <Navbar />
          <Carousel />
          <Feature />
          <Trending />
        </div>
      </div>
    </>
  )
}
