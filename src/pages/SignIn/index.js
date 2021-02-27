import React from 'react'
import {FormValidation} from '../../utils'
//Components
import {Forms} from '../../components'

export default function SignIn() {
  const {Form, FormButton, FormField} = Forms
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 bg-yellow-400 h-screen"></div>
      <div className="col-span-4 h-screen">
        <Form
          initialValues={{email: '', password: ''}}
          validationSchema={FormValidation.SignIn}
          onSubmit={(values) => {
            console.log(values)
          }}>
          <>
            <FormField name="email" placeholder="Email" />
            <FormField type="password" name="password" placeholder="Password" />
            <FormButton type="submit">Submit</FormButton>
          </>
        </Form>
      </div>
    </div>
  )
}
