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

  h4{
    margin-top: 15%;
    text-align: center;
  }
  
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

const StatDisplay = ({data, playerName, lastSelectedYear}) => {

  const lastEntry = data.find(entry => entry.season.toString() === lastSelectedYear);

  const formatPercentage = (decimal) => {
    if ( !decimal ) return `0.00`;
    return (Number(decimal) * 100).toFixed(2);
  }

  return (

    <StatDisplayWrapper>
      <NameDisplayCard>
        <h2>{playerName || 'NULL'}</h2>
        <span title='Season'>{lastSelectedYear}</span>
      </NameDisplayCard>
      <IdDisplayCard>
        <b>ID:</b> #{lastEntry?.player_id || 0}<br/><br/>
        <b>Games played:</b> {lastEntry?.games_played || 0}
        </IdDisplayCard>
      <StatGraphDisplay>
        <StatCard title="Points per game">
          <span>PPG</span>
          {lastEntry?.pts || 0}
        </StatCard>
        <StatCard title="Assits per game">
          <span>APG</span>
          {lastEntry?.ast || 0}
        </StatCard>
        <StatCard title="3pt percentage">
          <span>3P%</span>
          {formatPercentage(lastEntry?.fg3_pct)}
        </StatCard>
        <StatCard title="Field goal percentage">
          <span>FG%</span>
          {formatPercentage(lastEntry?.fg_pct)}
        </StatCard>
        <StatCard title="Offensive rebounds per game">
          <span>ORPG</span>
          {lastEntry?.oreb || 0}
        </StatCard>
        <StatCard title="Defensive rebounds per game">
          <span>DRPG</span>
          {lastEntry?.dreb || 0}
        </StatCard>
        <StatCard title="Steals per game">
          <span>SPG</span>
          {lastEntry?.stl || 0}
        </StatCard>
        <StatCard title="Blocks per game">
          <span>BPG</span>
          {lastEntry?.blk || 0}
        </StatCard>
        <StatCard graph={true}>
          {
            data.length > 0 ?
              (<Graph playerData={data}/>)
            :
              (<h4>No seasons selected.</h4>)
          }
        </StatCard>
      </StatGraphDisplay>
      <MoreDisplay>
        <StatCard title="Minutess per game">
          <span>Minutes Per Game</span>
          {lastEntry?.min || 0}
        </StatCard>
        <StatCard title="Turnovers per game">
          <span>Turnovers Per Game</span>
          {lastEntry?.turnover || 0}
        </StatCard>
        <StatCard title="Games played">
          <span>Games Played</span>
          {lastEntry?.games_played || 0}
        </StatCard>
      </MoreDisplay>
    </StatDisplayWrapper>

  );

};

export default StatDisplay;