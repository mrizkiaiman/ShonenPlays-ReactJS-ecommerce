import React from 'react'
// import {} from './Partners.module.scss'
//Assets
import PartnersArray from './assets'

const Partners = () => {
  return (
    <div className="pt-24">
      <p className="text-3xl pb-12 pt-6 text-center text-d-blue">
        Official Partners
      </p>
      <div className="flex flex-row w-full justify-between items-center pb-10">
        {PartnersArray.map((partner, index) => (
          <img src={partner.img} key={index} alt="partner-icon" />
        ))}
      </div>
    </div>
  )
}

export default Partners
