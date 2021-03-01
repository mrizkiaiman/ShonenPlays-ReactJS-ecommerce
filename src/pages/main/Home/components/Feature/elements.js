import styled from 'styled-components'

export const FeatureSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 70px 100px;
  flex-wrap: wrap;

  @media (max-width: 603px) {
    flex-direction: column;
  }
`

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 603px) {
    margin-top: 20px;
  }
`

export const FeatureIcon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`
