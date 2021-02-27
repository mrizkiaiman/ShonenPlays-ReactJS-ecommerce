import React from 'react'

export default function ErrorMessage({text, visible}) {
  if (!visible || !text) return null
  else return <p className="font-oxanium text-sm text-red-600 mt-1">{text}</p>
}
