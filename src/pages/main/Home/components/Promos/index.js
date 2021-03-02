import React from 'react'
//Assets
import {LeftSideImage, RightSideImage} from '../../../../../assets/promos'

const Promos = () => {
  return (
    <div className="flex w-full relative py-24">
      <img src={LeftSideImage} className="z-20 rounded" alt="promo-left" />
      <img
        src={RightSideImage}
        className="rounded absolute right-0 py-24"
        alt="promo-right"
      />
    </div>
  )
}

export default Promos
