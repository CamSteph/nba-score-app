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
  min-height: 50vh;
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

  const filterInputsData = [
    {
        label: "Filter by date",
        type: "date",
        name: "date-filter",
        value: todaysDate,
        placeholder: null,
        onChange:  (e) => {
          const updatedDate = e.target.value;
          setTodaysDate(updatedDate);
          sessionStorage.setItem('curr-date', updatedDate);
        },
        clearSearch: null,
        title: "Date: MM-DD-YYYY"
      },
      {
        label: "Filter by team",
        type: "text",
        name: "team-filter",
        value: filterSearch,
        placeholder: 'i.e., Hawks',
        onChange:  (e) => {
          setFilterSearch(e.target.value);
        },
        clearSearch: () => {
          setFilterSearch('')
        },
      },
  ];

  const areDatesEqual = () => {
    return sessionStorage.getItem('curr-date') === formatDate();
  };

  return (
    <HomePageWrapper>
      <HomeTitle>
        {areDatesEqual() ? `Today's Games:` : `Games for ${todaysDate}`}     
      </HomeTitle>
      <FilterBar 
        filterInputsData={filterInputsData}
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