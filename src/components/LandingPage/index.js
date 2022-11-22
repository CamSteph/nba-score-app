import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';
import CallToActionImage from '../../media/images/home_img.svg';
import ScoresImage from '../../media/images/scores_img.jpg';
import PlayerImage from '../../media/images/player_img.jpg';
import { Link } from 'react-router-dom';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${customStyles.medium_shade_01};
  padding: 120px 0 50px;
`;

const TopWrapper = styled.section`
  width: 100%;
  height: auto;
  text-align: left;
  padding: 30px;
  min-height: 35vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ( max-width: 640px ) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 60px;
  line-height: 150%;
`;

const PageTitle = styled.h1`
  color: ${customStyles.light_shade_01};

  strong{
    color: ${customStyles.accent_shade_03};
  }
`;

const PageMessage = styled.div`
  color: ${customStyles.light_shade_01};
  margin-top: 20px;
  opacity: .7;

  @media ( min-width: 1040px ) {
    max-width: 80%;
  }
`;

const TopImage = styled.img`
  width: 50%;
  height: 50%;

  @media ( min-width: 1040px ) {
    width: 40%;
    height: 40%;
  }
`;

const BottomWrapper = styled.section`
  width: 100%;
  height: auto;
  min-height: 35vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  place-items: center;
  padding-top: 50px;

  @media ( max-width: 640px ) {
    grid-template-columns: 1fr;
    padding-top: 25px;
  }
`;

const ActionCard = styled.div`
  width: 80%;
  max-width: 380px;
  height: 220px;
  border-radius: 6px;
  padding: 20px;
  color: ${customStyles.light_shade_01};
  font-weight: bold;
  background: rgba(255, 255, 255, .1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  a {
    width: 80%;

    button {
    width: 100%;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all .5s ease;
    
    &:hover{
      background: transparent;
      border: 1px solid ${customStyles.light_shade_01};
      color: ${customStyles.light_shade_01};
    }
  }
}
`;

const ActionImage = styled.div`
  width: 100%;
  height: 65%;
  object-fit: cover;
  border-radius: 12px;
  background: linear-gradient(to top, rgba(0, 0, 0, .4), rgba(0, 0, 0, .7)), url(${props => props.bgImg});
  background-position: center ${props => props.bgPos};
  background-size: cover;
  display: grid;
  place-items: center;
  text-align: center;
`;

const LandingPage = () => {
  return (
    <Container>
      <TopWrapper>
        <Wrapper>
          <PageTitle>Welcome to the <strong>Player's</strong> League.</PageTitle>
          <PageMessage>Check out the most recent NBA games, your favorite players, and their season averages all in one hub!!</PageMessage>
        </Wrapper>
        <TopImage src={CallToActionImage} />
      </TopWrapper>
      <BottomWrapper>
        <ActionCard>
          <ActionImage bgImg={ScoresImage} bgPos='top'>
            <span>Check out the most recent scores!</span>
          </ActionImage>
          <Link to='/scores'>
            <button>View More <BsBoxArrowUpRight /></button>
          </Link>
        </ActionCard>
        <ActionCard>
          <ActionImage bgImg={PlayerImage} bgPos='top'>
            <span>View your favorite players here!</span>
          </ActionImage>
          <Link to='/players'>
            <button>View More <BsBoxArrowUpRight /></button>
          </Link>
        </ActionCard>
      </BottomWrapper>
    </Container>
  );
};

export default LandingPage;