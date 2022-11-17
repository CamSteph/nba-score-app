import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';
import CallToActionImage from '../../media/images/nba_call_to_action.jpg';

const LandingPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${customStyles.medium_shade_01};
  padding: 120px 0 50px;
`;

const LandingPageTitle = styled.h1`
  text-align: center;
  color: ${customStyles.light_shade_01};

  strong{
    color: ${customStyles.accent_shade_03};
  }
`;

const CardWrapper = styled.main`
  width: 85%;
  height: auto;
  max-height: 140vh;
  min-height: 45vh;
  background: transparent;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 20px;
  margin: auto;
  place-items: center;
  /* padding-top: 80px; */
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  padding: ${props => props.callToAction ? '' : '20px'};
  grid-column: ${props => `${props.startCol} / ${props.endCol}`};
  grid-row: ${props => `${props.startRow} / ${props.endRow}`};
  background: ${props => props.callToAction ? '' : 'rgba(255, 255, 255, .1)'};
  border-radius: 6px;
  color: ${customStyles.light_shade_01};
  overflow-y: scroll;

`;

const CallToActionCard = styled.img`
  object-fit: cover;
  grid-column: ${props => `${props.startCol} / ${props.endCol}`};
  grid-row: ${props => `${props.startRow} / ${props.endRow}`};
  width: 90%;
  height: 75%;
  padding-top: 0;
  position: relative;
  border-radius: 6px;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <LandingPageTitle>Welcome to the <strong>Player's</strong> League.</LandingPageTitle>
      <CardWrapper>
        <CallToActionCard src={CallToActionImage} startCol={1} endCol={-1} startRow={0} endRow={1} />
        <Card startCol={1} endCol={4} startRow={3} endRow={3} bgColorVal='blue'>
          LEARN MORE
        </Card>
        <Card startCol={4} endCol={-1} startRow={3} endRow={3} bgColorVal='green'>
          HEADLINES & ARTICLES
        </Card>
      </CardWrapper>
    </LandingPageContainer>
  );
};

export default LandingPage;