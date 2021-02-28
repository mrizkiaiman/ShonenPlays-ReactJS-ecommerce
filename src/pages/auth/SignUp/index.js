import React from 'react'
import './style.scss'
//Assets
import GoogleIcon from '../../../assets/Icons/google.svg'
//Components
import {Forms, Parts} from '../../../components'
//Utils
import {FormValidation} from '../../../utils'
import {Link} from 'react-router-dom'

export default function SignIn() {
  const {Form, FormButton, FormField} = Forms
  const {Button, Line} = Parts

  return (
    <section className="mainContainer">
      <div className="bannerContainer"></div>
      <div className="signUpContainer">
        <div className="signUpContainer--formContainer">
          <Form
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            }}
            validationSchema={FormValidation.SignUp}
            onSubmit={(values) => {
              console.log(values)
            }}>
            <>
              <p className="text-3xl font-semibold mb-8">Create new account</p>
              <div className="mb-4">
                <label className="font-semibold">First name</label>
                <FormField name="firstName" placeholder="First name" />
              </div>
              <div className="mb-4">
                <label className="font-semibold">Last name</label>
                <FormField name="lastName" placeholder="Last name" />
              </div>
              <div className="mb-4">
                <label className="font-semibold">Email Address</label>
                <FormField name="email" placeholder="Email" />
              </div>
              <div className="mb-1">
                <label className="font-semibold">Password</label>
                <FormField
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <FormButton type="submit" title="Sign Up" />
              <Line />
              <Button
                icon={
                  <img src={GoogleIcon} className="mr-4" alt="google-icon" />
                }
                title={'Log in with Google'}
              />
              <p class="mt-8 text-center">
                Already have an account?{' '}
                <Link
                  to="/"
                  rel="noreferrer"
                  href="https://mrizkiaiman.wordpress.com"
                  class="font-semibold text-f-blue hover:text-blue-700">
                  Sign In
                </Link>
              </p>
            </>
          </Form>
        </div>
      </div>
    </section>
  )
}
