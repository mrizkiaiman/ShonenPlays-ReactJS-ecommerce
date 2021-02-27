import React from 'react'
import {useFormikContext} from 'formik'

export default function FormButton({styling, title}) {
  const {handleSubmit} = useFormikContext()
  return <button onClick={handleSubmit}>Login</button>
}
