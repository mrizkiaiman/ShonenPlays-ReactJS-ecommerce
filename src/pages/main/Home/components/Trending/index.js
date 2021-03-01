import React from 'react'
//Assets
import {
  IpadImage,
  BooksImage,
  SwitchImage,
  SneakerImage,
  AirPodsImage,
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
            <TrendingTitleText>Trending ShonenPlays</TrendingTitleText>
            <TrendingTitleText>Collections</TrendingTitleText>
          </div>
          <TrendingSubtitleText>
            Checkout our newest trends this coming season
          </TrendingSubtitleText>
        </TrendingContent>
        <TrendingContent>
          <TrendingImage alt="switch-image" src={SwitchImage} />
        </TrendingContent>
      </TrendingContainer>
      <TrendingContainer>
        <div>
          <TrendingContent>
            <TrendingSmallerImage alt="switch-image" src={SneakerImage} />
          </TrendingContent>
          <TrendingContent>
            <TrendingSmallerImage alt="switch-image" src={AirPodsImage} />
          </TrendingContent>
        </div>
        <TrendingBiggerImage alt="ipad-image" src={IpadImage} />
      </TrendingContainer>
    </TrendingSection>
  )
}

export default Trending
