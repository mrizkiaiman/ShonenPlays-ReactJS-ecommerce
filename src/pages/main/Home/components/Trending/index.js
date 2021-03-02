import React from 'react'
//Assets
import {
  NormalSizeImage,
  NormalSizeImagev2,
  SlightlyBiggerSizeImage,
  DoubleSizeImage,
} from '../../../../../assets/trending'
//Components
import {
  TrendingSection,
  TrendingContainer,
  TrendingContent,
  TrendingImage,
  TrendingBiggerImage,
  TrendingSmallerImage,
  TrendingTitleText,
  TrendingSubtitleText,
} from './elements'

function Trending() {
  return (
    <TrendingSection>
      <TrendingContainer>
        <TrendingContent>
          <div className="p-5">
            <TrendingTitleText>Trending ShonenStyles</TrendingTitleText>
            <TrendingTitleText>Collections</TrendingTitleText>
          </div>
          <TrendingSubtitleText>
            Checkout our newest trends this coming season
          </TrendingSubtitleText>
        </TrendingContent>
        <TrendingContent>
          <TrendingImage alt="switch-image" src={SlightlyBiggerSizeImage} />
        </TrendingContent>
      </TrendingContainer>
      <TrendingContainer>
        <div>
          <TrendingContent>
            <TrendingSmallerImage alt="switch-image" src={NormalSizeImage} />
          </TrendingContent>
          <TrendingContent>
            <TrendingSmallerImage alt="switch-image" src={NormalSizeImagev2} />
          </TrendingContent>
        </div>
        <TrendingBiggerImage alt="ipad-image" src={DoubleSizeImage} />
      </TrendingContainer>
    </TrendingSection>
  )
}

export default Trending
