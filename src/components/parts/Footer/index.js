import React from 'react'
import {footer, allrightreserved, socialIcon} from './Footer.module.scss'
//Assets
import {
  FacebookIcon,
  InstagramIcon,
  GoogleIcon,
  TwitterIcon,
} from '../../../assets/icons/socials'

const index = () => {
  return (
    <>
      <div className={footer}>
        <div className="flex justify-between items-center justify-self-center w-4/6">
          <div>
            <p className="text-2xl font-semibold mb-7">Contact</p>
            <p>test.email0123@elyssi.com</p>
            <p>0123 234 222</p>
            <p>Iki</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="text-5xl text-white font-semibold mb-5">
              ShonenStyles
            </p>
            <div className="flex">
              <img
                src={FacebookIcon}
                className={socialIcon}
                alt="social-icons"
              />
              <img
                src={InstagramIcon}
                className={socialIcon}
                alt="social-icons"
              />
              <img src={GoogleIcon} className={socialIcon} alt="social-icons" />
              <img
                src={TwitterIcon}
                className={socialIcon}
                alt="social-icons"
              />
            </div>
          </div>

          <div>
            <p className="text-2xl font-semibold mb-7">Link</p>
            <p>Shop</p>
            <p>Contact Us</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className={allrightreserved}>
        <p className="font-titillium">All rights reserved © 2021. </p>
      </div>
    </>
  )
}

export default index
