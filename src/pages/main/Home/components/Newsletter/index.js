import React, {useState} from 'react'
import {container} from './Newsletter.module.scss'
//Components
import {TextInput, Button} from '../../../../../components/parts'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  return (
    <div className={container}>
      <div className="flex flex-col justify-center items-center mb-10">
        <p className="text-white text-4xl font-bold mb-4">
          Let's keep in touch
        </p>
        <p className="text-white text-lg font-light font-titillium">
          Join our list and save 15% off your first order, don't miss it!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <TextInput
          value={email}
          onChange={(v) => setEmail(v)}
          customStyle="w-6/12"
          placeholder="Your email"
        />
        <Button
          title="Subsribe"
          customStyle="flex justify-center items-center w-40 h-11 mt-6
        font-semibold text-white bg-orange rounded-lg"
        />
      </div>
    </div>
  )
}

export default Newsletter
