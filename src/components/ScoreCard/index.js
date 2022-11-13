import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';

const ScoreCardWrapper = styled.div`
  width: 300px;
  height: 180px;
  border-radius: 8px;
  background-color: rgba(255, 225, 225, 0.10);
  transition: box-shadow .5s ease;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  transition: background-color .5s ease;

  :hover{
    background-color: rgba(255, 225, 225, 0.25);
  }
`;

const TeamWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  color: ${props => props.winner ? 'rgba(255, 255, 255, .9)' : 'rgba(255, 255, 255, .4)'};
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 1.5 ease;

  :hover{
    background: rgba(220, 220, 220, .2);
    color: ${props => props.winner ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, .6)'};
  }
`;

const DisplayQuarter = styled.span`
  text-align: center;
  width: 100%;
  font-size: ${customStyles.default_font_size}px;
  color: ${customStyles.light_shade_01};
  filter: opacity(.75);
  letter-spacing: 1.2px;
`;

const TeamLogoImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 10px;
  object-fit: cover;
`;

const TeamNameWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ScoreCard = ({
  homeTeamName,
  homeTeamScore,
  homeTeamId,
  homeTeamLogo,
  visitorTeamName,
  visitorTeamScore,
  visitorTeamId,
  visitorTeamLogo,
  period,
  gameStatus,
  teamClicked,
  setTeamClicked,
  setTeamId,
}) => {

  const loadModal = (teamId) => {
    setTeamClicked(!teamClicked);
    setTeamId(teamId);
  }

  const formatPeriod = (period) => {
    switch (period) {
      case 1:
        return '1st Quarter';
      case 2:
        return '2nd Quarter';
      case 3:
        return '3rd Quarter';
      case 4:
        return '4th Quarter';
      default:
        return 'TBD';
    };
  };

  return (
      <ScoreCardWrapper>
        {
          gameStatus === 'Final' ?
            <DisplayQuarter><strong>{gameStatus}</strong></DisplayQuarter>
          :
          gameStatus !== 'Final' && period === 0 ?
            <DisplayQuarter>Tip off: <strong>{gameStatus}</strong></DisplayQuarter>
          :
            <DisplayQuarter>{formatPeriod(period) || '0'}</DisplayQuarter>
        }
          <TeamWrapper winner={visitorTeamScore > homeTeamScore ? true : false} onClick={() => loadModal(visitorTeamId)}>
            <TeamNameWrapper>
              <TeamLogoImg src={visitorTeamLogo} alt="Team logo" />
              <h3>{visitorTeamName || 'NULL'}</h3>
            </TeamNameWrapper>
            <h3>{visitorTeamScore || '0'}</h3>
          </TeamWrapper>
          <TeamWrapper winner={homeTeamScore > visitorTeamScore ? true : false} onClick={() => loadModal(homeTeamId)}>
            <TeamNameWrapper>
              <TeamLogoImg src={homeTeamLogo} alt="Team logo" />
              <h3>{homeTeamName || 'NULL'}</h3>
            </TeamNameWrapper>
            <h3>{homeTeamScore || '0'}</h3>
          </TeamWrapper>
      </ScoreCardWrapper>
  );

};

export default ScoreCard;