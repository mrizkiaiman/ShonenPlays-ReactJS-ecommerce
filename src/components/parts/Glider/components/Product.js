import React from 'react'
import ShoesImage from '../../../../assets/products/shoes.png'

const Product = () => {
  return (
    <div className="mr-10">
      <img src={ShoesImage} alt="shoes" className="rounded-md" />
      <div className="flex justify-between mt-4">
        <p>Good Shoes</p>
        <p className="text-orange">$20</p>
      </div>
      <button
        type="submit"
        className="bg-d-green rounded-md mt-4 text-white font-semibold w-full h-10">
        {' '}
        Add to Cart
      </button>
    </div>
  )
}

export default Product
