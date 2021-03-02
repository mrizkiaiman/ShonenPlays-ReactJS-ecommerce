import React from 'react'
import {section, container, icon} from './Feature.module.scss'

function Feature() {
  const FeatureTitle = ({title}) => {
    return <p className="color-dgreen font-bold text-xl">{title}</p>
  }

  const FeatureSubTitle = ({sub}) => {
    return <p className="font-titillium font-normal text-md">{sub}</p>
  }

  return (
    <div className={section}>
      <div className={container}>
        <img
          className={icon}
          src="https://d33wubrfki0l68.cloudfront.net/3c5b77be07c217ce310e179b30e44da59d358fb8/1fd98/assets/img/icons/icon-shipping.svg"
          alt="free-shipping"
        />
        <div className="ml-8">
          <FeatureTitle title="Free shipping" />
          <FeatureSubTitle sub="On all orders over $30" />
        </div>
      </div>

      <div className={container}>
        <img
          className={icon}
          src="https://d33wubrfki0l68.cloudfront.net/2e7e83f4e008c5efc2301e9ca7dde06e98c9a2b3/0b6dc/assets/img/icons/icon-support.svg"
          alt="always-available"
        />
        <div className="ml-8">
          <FeatureTitle title="Always available" />
          <FeatureSubTitle sub="24/7 call center available" />
        </div>
      </div>

      <div className={container}>
        <img
          className={icon}
          src="https://d33wubrfki0l68.cloudfront.net/c5fe62fc1adbb5e1e57a703b0f916a2ff38b4f77/efebf/assets/img/icons/icon-return.svg"
          alt="free-returns"
        />
        <div className="ml-8">
          <FeatureTitle title="Free returns" />
          <FeatureSubTitle sub="30 days free return policy" />
        </div>
      </div>
    </div>
  )
}

export default Feature
