import React from 'react'
import {
  firstImg,
  secondImg,
  thirdImg,
  fourthImg,
  icon,
} from './Trending.module.scss'
//Assets
import RightArrowIcon from '../../../../../assets/icons/right-arrow.svg'

function Trending() {
  const DefaultContent = ({title}) => {
    return (
      <div className="p-7">
        <div className="mb-6">
          <p className="text-3xl text-black">{title}</p>
          <p className="text-3xl text-black">Collections</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <img src={RightArrowIcon} alt="right-icon" className={icon} />
          <p className="text-white font-semibold text-xl mt-1 ml-4">
            Get it now
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap">
      <div className="flex justify-between w-full mt-15">
        <div style={{width: 732, padding: 45}}>
          <div className="mb-7">
            <p className="font-bold text-4xl text-black">
              Trending ShonenStyles
            </p>
            <p className="font-bold text-4xl text-black">Collections</p>
          </div>
          <p className="text-xl text-gray-400 font-bold">
            Checkout our newest trends this coming season
          </p>
        </div>
        <div className={firstImg}>
          <div className="p-7">
            <div className="mb-6">
              <p className="text-3xl text-white">Quality Shirts</p>
              <p className="text-3xl text-white">Collections</p>
            </div>
            <div className="flex items-center cursor-pointer">
              <img src={RightArrowIcon} alt="right-icon" className={icon} />
              <p className="text-orange font-semibold text-xl mt-1 ml-4">
                Get it now
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full items-center mt-15">
        <div>
          <div className={secondImg}>
            <DefaultContent title="Valuable Watches" />
          </div>
          <div className={thirdImg}>
            <DefaultContent title="Trendy Shoes" />
          </div>
        </div>
        <div className={fourthImg}>
          <DefaultContent title="Solid Bags" />
        </div>
      </div>
    </div>
  )
}

export default Trending
