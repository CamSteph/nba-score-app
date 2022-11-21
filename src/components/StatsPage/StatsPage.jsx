import React, { useState } from 'react';
import styled from 'styled-components';
import FilterBar from '../../containers/FilterBar';
import GetStatData from '../../containers/getStatData';
import { customStyles } from '../../utilities/customStyles';
import { formatDate } from '../../utilities/formatDate';
import { useLocation, useNavigate } from 'react-router-dom';
import YearSelection from '../YearSelection';

const StatsPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 120px 0 50px;
  background: ${customStyles.medium_shade_01};
  color: ${customStyles.light_shade_01};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatePageTitle = styled.h1`
  text-align: center;
  width: 100%;
  position: relative;

  strong{
    color: ${customStyles.accent_shade_03};
  }

  button{
    position: absolute;
    left: 50px;
    top: 0;
    padding: 10px 20px;
    font-weight: bold;
    background: transparent;
    border: 1px solid ${customStyles.light_shade_01};
    color: ${customStyles.light_shade_01};
    cursor: pointer;
    transition: all .5s ease;

    &:hover{
      background: ${customStyles.light_shade_01};
      color: ${customStyles.dark_shade_01};
      border: 1px solid ${customStyles.dark_shade_01};
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-s;
`;

const getYearFromDate = (date) => {
  if (!date) return;
  let yearFromDate =  date.split('-')[0];
  sessionStorage.setItem('curr-year', yearFromDate);
  return yearFromDate;
}

const setDate = () => {
  return getYearFromDate(sessionStorage.getItem('curr-year')) || getYearFromDate(formatDate());
};

const setSearch = () => {
  return sessionStorage.getItem('team-search') || '';
};

const StatsPage = () => {

  const location = useLocation();
  const pId = location.search.slice(1).split('&')[0].split('=')[1];
  const playerName = location.search.slice(1).split('&')[1].split('=')[1].replace('_', ' ');

  const [selectedYear, setSelectedYear] = useState(setDate());

  const [allSelectedYears, setAllSelectedYears] = useState([selectedYear]);
  const [isRemoving, setIsRemoving] = useState(false);

  console.log(allSelectedYears);

  const navigate = useNavigate();

  return (
    <StatsPageWrapper>
      <StatePageTitle><button onClick={() => navigate(-1)}>Go back</button>Check out the <strong>player's</strong> stats!</StatePageTitle>
      <YearSelection allSelectedYears={allSelectedYears} setAllSelectedYears={setAllSelectedYears} setIsRemoving={setIsRemoving}/>
      <GetStatData 
        selectedYear={selectedYear} 
        pId={pId} 
        playerName={playerName} 
        allSelectedYears={allSelectedYears}
        isRemoving={isRemoving}
      />
    </StatsPageWrapper>
  );

};

export default StatsPage;