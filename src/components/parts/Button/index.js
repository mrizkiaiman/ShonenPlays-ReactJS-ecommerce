import React from 'react'

export default function Button({title, className, onSubmit, icon}) {
  return (
    <button
      className={
        className
          ? className
          : 'flex justify-center items-center border border-gray-300 w-full px-4 py-3 mt-6 font-semibold text-black bg-white rounded-lg'
      }>
      {icon ? icon : null}
      {title}
    </button>
  )
}
