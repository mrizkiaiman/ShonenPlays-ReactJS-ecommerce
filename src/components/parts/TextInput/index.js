import React from 'react'

const TextInput = ({customStyle, ...props}) => {
  return (
    <input
      {...props}
      className={`border-transparent bg-gray-100 focus:border-gray-500 
      focus:bg-white focus:ring-2 transition duration-500 ease-in-out 
        px-4 py-2 rounded-lg ${customStyle}`}
    />
  )
}

export default TextInput
