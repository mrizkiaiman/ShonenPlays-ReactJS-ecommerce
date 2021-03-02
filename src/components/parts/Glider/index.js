import React from 'react'
//Components
import Product from './components/Product'

function index() {
  return (
    <div className="my-12">
      <div className="mb-8">
        <p className="text-3xl font-semibold">Best Sellers</p>
        <p className="font-titillium text-lg font-light">
          Be styling, no matter the season
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default index
