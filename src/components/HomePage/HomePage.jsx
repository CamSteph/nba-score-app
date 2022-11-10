import React, { useState } from 'react';
import GetScoreData from '../../containers/GetScoreData';
import styled from 'styled-components';
import FilterBar from '../../containers/FilterBar';
import { formatDate } from '../../utilities/formatDate';
import { customStyles } from '../../utilities/customStyles';

const HomeTitle = styled.h1`
  text-align: center;
  padding-bottom: 20px;
  color: ${customStyles.light_shade_01};
`;

const CardsContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-gap: 30px;
  padding: 30px 0;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`;

const HomePageWrapper = styled.div`
  padding: 120px 0 50px;
  background: ${customStyles.medium_shade_01};
`;

const setDate = () => {
  return sessionStorage.getItem('curr-date') || formatDate();
};

const setSearch = () => {
  return sessionStorage.getItem('team-search') || '';
};

const HomePage = () => {

  const [todaysDate, setTodaysDate] = useState(setDate());
  const [filterSearch, setFilterSearch] = useState(setSearch());
  // const [debounceSerarchValue, setDebouneSearchValue] = useDebounce(filterSearch, 500);

  return (
    <HomePageWrapper>
      <HomeTitle>Today's Games</HomeTitle>
      <FilterBar 
        todaysDate={todaysDate} 
        setTodaysDate={setTodaysDate} 
        filterSearch={filterSearch} 
        setFilterSearch={setFilterSearch}
      />
      <CardsContainer>
        <GetScoreData 
          todaysDate={todaysDate}
          filterSearch={filterSearch}
          setFilterSearch={setFilterSearch}
        />
      </CardsContainer>
    </HomePageWrapper>
  );
};

export default HomePage;