import React from 'react'
import {useFormikContext} from 'formik'
//Components
import ErrorMessage from '../ErrorMessage'

export default function FormField({
  name,
  errorMessageCustomStyles,
  ...otherProps
}) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext()
  return (
    <div className="flex-column">
      <input
        {...otherProps}
        onChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage
        visible={touched[name]}
        text={errors[name]}
        customStyles={errorMessageCustomStyles}
      />
    </div>
  )
}
