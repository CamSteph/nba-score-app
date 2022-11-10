import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';

const ScoreCardWrapper = styled.div`
  width: 300px;
  height: 220px;
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
  background: ${props => props.winner ? customStyles.accent_shade_01 : '#ccc'};
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
`;

const DisplayQuarter = styled.span`
  text-align: center;
  width: 100%;
  font-size: ${customStyles.default_font_size}px;
  color: ${customStyles.light_shade_01};
  filter: opacity(.75);
  letter-spacing: 1.2px;
`;

const VersusText = styled.span`
  font-size: ${customStyles.medium_font_size}px;
  text-align: center;
  color: ${customStyles.accent_shade_02};
  filter: opacity(.75);
  font-weight: bold;
  user-select: none;
`;

const ScoreCard = ({
  homeTeamAbbreviation,
  visitorTeamAbbreviation,
  homeTeamName,
  visitorTeamName,
  homeTeamScore,
  visitorTeamScore,
  period,
  gameStatus,
  teamClicked,
  setTeamClicked,
  homeTeamId,
  visitorTeamId,
  teamId,
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
        return 'Tip-off: TBD';
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
            <h3>{visitorTeamName || 'NULL'}</h3>
            <h3>{visitorTeamScore|| '0'}</h3>
          </TeamWrapper>
        <VersusText>@</VersusText>
          <TeamWrapper winner={homeTeamScore > visitorTeamScore ? true : false} onClick={() => loadModal(homeTeamId)}>
            <h3>{homeTeamName || 'NULL'}</h3>
            <h3>{homeTeamScore|| '0'}</h3>
          </TeamWrapper>
      </ScoreCardWrapper>
  );

};

export default ScoreCard;