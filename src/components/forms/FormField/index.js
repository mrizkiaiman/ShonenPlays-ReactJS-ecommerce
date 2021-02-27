import React from 'react'
import {useFormikContext} from 'formik'
//Components
import ErrorMessage from '../ErrorMessage'

export default function FormField({
  name,
  errorMessageCustomStyles,
  customStyle,
  className,
  ...otherProps
}) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext()
  return (
    <div className="flex-column">
      <input
        {...otherProps}
        onChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        className={
          className
            ? className
            : 'w-full border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-2 transition duration-500 ease-in-out px-4 py-2 mt-2 rounded-lg '
        }
      />
      <ErrorMessage
        visible={touched[name]}
        text={errors[name]}
        customStyles={errorMessageCustomStyles}
      />
    </div>
  )
}
