import React from 'react'
//Components
import {Parts} from '../../../components'

export default function Home() {
  const {Navbar, Carousel} = Parts
  return (
    <>
      <Navbar />
      <Carousel />
    </>
  )
}
