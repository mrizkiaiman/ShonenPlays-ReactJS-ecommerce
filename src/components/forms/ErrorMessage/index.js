import React from 'react'

export default function ErrorMessage({text, visible}) {
  if (!visible || !text) return null
  else return <p className="text-red mt-1">{text}</p>
}
