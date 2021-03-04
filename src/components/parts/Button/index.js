import React from 'react'

export default function Button({title, customStyle, onSubmit, icon}) {
  return (
    <button
      onClick={onSubmit ? () => onSubmit() : null}
      className={
        customStyle
          ? customStyle
          : `flex justify-center items-center border border-gray-300 w-full 
          px-4 py-3 mt-6 font-semibold text-black bg-white rounded-lg`
      }>
      {icon ? icon : null}
      {title}
    </button>
  )
}
