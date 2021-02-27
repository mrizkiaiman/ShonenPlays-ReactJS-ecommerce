import React from 'react'
import {useFormikContext} from 'formik'

export default function FormButton({customStyle, className, title}) {
  const {handleSubmit} = useFormikContext()
  return (
    <button
      onClick={handleSubmit}
      type="submit"
      className={
        className
          ? className
          : `block w-full px-4 py-3 mt-6 
          font-semibold text-white bg-d-green rounded-lg hover:bg-white 
          hover:text-d-green border-gray-300 border 
          transition duration-400 ease-in-out`
      }>
      {title}
    </button>
  )
}
