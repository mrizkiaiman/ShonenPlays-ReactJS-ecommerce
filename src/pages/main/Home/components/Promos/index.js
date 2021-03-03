import React from 'react'
import {leftImg, rightImg} from './Promos.module.scss'

const Promos = () => {
  return (
    <div className="flex w-full relative py-24">
      <div className={leftImg}></div>
      <div className={rightImg}></div>
    </div>
  )
}

export default Promos
