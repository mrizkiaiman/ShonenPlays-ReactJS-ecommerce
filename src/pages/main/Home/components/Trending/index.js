import React from 'react'
import {firstImg, secondImg, thirdImg, fourthImg} from './Trending.module.scss'

function Trending() {
  return (
    <div className="flex flex-wrap">
      <div className="flex justify-between w-full mt-15">
        <div style={{width: 732}}>
          <div className="p-5">
            <p className="font-bold text-3xl text-gray-400">
              Trending ShonenStyles
            </p>
            <p className="font-bold text-3xl text-gray-400">Collections</p>
          </div>
          <p className="text-xl p-5">
            Checkout our newest trends this coming season
          </p>
        </div>
        <div className={firstImg}></div>
      </div>
      <div className="flex justify-between w-full items-center mt-15">
        <div>
          <div className={secondImg}></div>
          <div className={thirdImg}></div>
        </div>
        <div className={fourthImg}></div>
      </div>
    </div>
  )
}

export default Trending
