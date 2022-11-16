import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';
import Graph from '../Graph';

const StatDisplayWrapper = styled.main`
  width: 90%;
  max-width: 900px;
  height: 100%;
  min-height: 60vh;
  background: rgba(20, 20, 40, 0.50);
  border-radius: 6px;
  padding: 20px;
  text-transform: capitalize;
  display: grid;
  grid-template-areas: 
  "playerName playerName playerId"
  "statGraph statGraph statGraph"
  "more more more"
  ;
  grid-template-rows: 1fr 6fr 1fr;
  grid-gap: 15px;
  margin-bottom: 20px;
`;

const NameDisplayCard = styled.div`
  padding: 20px;
  background: rgba(255, 225, 225, 0.20);
  border-radius: 6px;
  grid-area: playerName;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span{
    opacity: .6;
  }
`;

const IdDisplayCard = styled.span`
  padding: 20px;
  background: rgba(255, 225, 225, 0.20);
  border-radius: 6px;
  grid-area: playerId;
`;

const StatGraphDisplay = styled.main`
  padding: 20px;
  background: rgba(255, 225, 225, 0.20);
  border-radius: 6px;
  grid-area: statGraph;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 75px 75px 2.5fr;
  grid-gap: 15px;
`;

const StatCard = styled.div`
  /* padding: 20px; */
  background: rgba(255, 225, 225, 0.20);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  font-size: ${customStyles.medium_font_size}px;
  grid-column: ${props => props.graph ? '1/-1' : ''};
  
  span{
    font-weight: bold;
    font-size: ${customStyles.default_font_size}px;
    padding: 5px;
    width: 100%;
    height: auto;
    background: ${customStyles.medium_shade_01};
    color: ${customStyles.light_shade_01};
    border-radius: 6px 6px 0 0;
    text-align: center;
  }
`;

const MoreDisplay = styled.div`
  padding: 20px;
  background: rgba(255, 225, 225, 0.20);
  border-radius: 6px;
  grid-area: more;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;

const StatDisplay = ({data, playerName}) => {

  console.log(data)

  const formatPercentage = (decimal) => {
    return (Number(decimal) * 100).toFixed(2);
  }

  return (

    <StatDisplayWrapper>
      <NameDisplayCard>
        <h2>{playerName || 'NULL'}</h2>
        <span>Los Angeles Lakers</span>
      </NameDisplayCard>
      <IdDisplayCard>
        <b>ID:</b> #{data.player_id}<br/><br/>
        <b>Games played:</b> {data.games_played}
        </IdDisplayCard>
      <StatGraphDisplay>
        <StatCard title="Points per game">
          <span>PPG</span>
          {data.pts}
        </StatCard>
        <StatCard title="Assits per game">
          <span>APG</span>
          {data.ast}
        </StatCard>
        <StatCard title="3pt percentage">
          <span>3P%</span>
          {formatPercentage(data.fg3_pct)}
        </StatCard>
        <StatCard title="Field goal percentage">
          <span>FG%</span>
          {formatPercentage(data.fg_pct)}
        </StatCard>
        <StatCard title="Offensive rebounds per game">
          <span>ORPG</span>
          {data.oreb}
        </StatCard>
        <StatCard title="Defensive rebounds per game">
          <span>DRPG</span>
          {data.dreb}
        </StatCard>
        <StatCard title="Steals per game">
          <span>SPG</span>
          {data.stl}
        </StatCard>
        <StatCard title="Steals per game">
          <span>BPG</span>
          {data.blk}
        </StatCard>
        <StatCard graph={true}>
          {/* <span>Graph goes here</span>
          {data.blk} */}
          <Graph playerData={data}/>
        </StatCard>
      </StatGraphDisplay>
      <MoreDisplay>
      <StatCard title="Minutess per game">
          <span>MPG</span>
          {data.min}
        </StatCard>
      <StatCard title="Games played">
          <span>GP</span>
          {data.games_played}
        </StatCard>
      <StatCard title="Turnovers per game">
          <span>TPG</span>
          {data.turnover}
        </StatCard>
      </MoreDisplay>
    </StatDisplayWrapper>

  );

};

export default StatDisplay;