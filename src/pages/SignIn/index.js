import React from 'react'
import './style.scss'
import {FormValidation} from '../../utils'
//Assets
import GoogleIcon from '../../assets/Icons/google.svg'
//Components
import {Forms, Parts} from '../../components'

export default function SignIn() {
  const {Form, FormButton, FormField} = Forms
  const {Button, Line} = Parts
  return (
    <section className="mainContainer">
      <div className="bannerContainer"></div>
      <div className="signInContainer">
        <div className="signInContainer--formContainer">
          <Form
            initialValues={{email: '', password: ''}}
            validationSchema={FormValidation.SignIn}
            onSubmit={(values) => {
              console.log(values)
            }}>
            <>
              <p className="text-3xl font-semibold mb-8">
                Sign in to your account
              </p>
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
              <div class="mt-2 text-right">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mrizkiaiman.wordpress.com"
                  class="text-sm font-semibold text-gray-700 hover:text-black focus:text-blue-700">
                  Forgot Password?
                </a>
              </div>
              <FormButton type="submit" title="Sign In" />
              <Line />
              <Button
                icon={
                  <img src={GoogleIcon} className="mr-4" alt="google-icon" />
                }
                title={'Log in with Google'}
              />
              <p class="mt-8 text-center">
                Need an account?{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mrizkiaiman.wordpress.com"
                  class="font-semibold text-f-blue hover:text-blue-700">
                  Sign Up
                </a>
              </p>
            </>
          </Form>
        </div>
      </div>
    </section>
  )
}
