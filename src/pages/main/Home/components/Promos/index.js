import React from 'react'
import {leftImg, rightImg, rightImg_content} from './Promos.module.scss'

const Promos = () => {
  return (
    <div className="flex w-full relative py-24">
      <div className={leftImg}></div>
      <div className={rightImg}>
        <div className={rightImg_content}>
          <p className="text-white text-xl mb-6">New Arrivals</p>
          <p className="text-white text-5xl font-bold pr-10">
            Blouses & Jeans Up to 70% Off
          </p>
          <button className="w-3/6 h-12 rounded bg-white text-black font-bold mt-8">
            Get it now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Promos
