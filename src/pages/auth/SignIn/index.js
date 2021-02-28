import React from 'react'
import './style.scss'
//Assets
import GoogleIcon from '../../../assets/Icons/google.svg'
//Components
import {Forms, Parts} from '../../../components'
//Utils
import {FormValidation} from '../../../utils'
import {Link, useHistory} from 'react-router-dom'

export default function SignIn() {
  const {Form, FormButton, FormField} = Forms
  const {Button, Line} = Parts
  const history = useHistory()

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
                onSubmit={() => history.push('/home')}
              />
              <p class="mt-8 text-center">
                Need an account?{' '}
                <Link
                  to="/signup"
                  rel="noreferrer"
                  href="https://mrizkiaiman.wordpress.com"
                  class="font-semibold text-f-blue hover:text-blue-700">
                  Sign Up
                </Link>
              </p>
            </>
          </Form>
        </div>
      </div>
    </section>
  )
}
