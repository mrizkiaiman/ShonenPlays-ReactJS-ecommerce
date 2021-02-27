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
          : 'block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'
      }>
      {title}
    </button>
  )
}
