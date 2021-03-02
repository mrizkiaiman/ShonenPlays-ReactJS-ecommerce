import React from 'react'
import {regularImg, smallerImg, biggerImg} from './Trending.module.scss'
//Assets
import {
  NormalSizeImage,
  NormalSizeImagev2,
  SlightlyBiggerSizeImage,
  DoubleSizeImage,
} from '../../../../../assets/trending'

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
        <img alt="alt" className={regularImg} src={SlightlyBiggerSizeImage} />
      </div>
      <div className="flex justify-between w-full items-center mt-15">
        <div>
          <img className={smallerImg} alt="alt" src={NormalSizeImage} />
          <img className={smallerImg} alt="alt" src={NormalSizeImagev2} />
        </div>
        <img className={biggerImg} alt="alt" src={DoubleSizeImage} />
      </div>
    </div>
  )
}

export default Trending
