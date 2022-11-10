import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';
import { FaTimes } from "react-icons/fa";

const FilterBarWrapper = styled.section`
  width: 92%;
  min-height: 80px;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  background: rgba(255, 225, 225, 0.10);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px auto;

  @media (max-width: 490px) {
    flex-direction: column;
    width: 75%;

    :nth-child(2) {
      /* display: none; */
    }
  }
`;

const InputElement = styled.input`
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-size: ${customStyles.default_font_size}px;
`;

const LabelElement = styled.label`
  margin-bottom: 10px;
  color: ${customStyles.light_shade_01};
`;

const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  span{
    position: absolute;
    left: 88%;
    top: 60%;
    font-size: ${customStyles.default_font_size}px;
    color: grey;
    cursor: pointer;
  }

  @media (max-width: 490px) {

    :nth-child(2) {
      margin-top: 25px;
    }
  }
`;

const FilterBar = ({
  todaysDate, 
  setTodaysDate,
  filterSearch,
  setFilterSearch,
}) => {

  const filterByDate = (e) => {
    const updatedDate = e.target.value;
    setTodaysDate(updatedDate);
    sessionStorage.setItem('curr-date', updatedDate);
  };

  const filterByName = (e) => {
    setFilterSearch(e.target.value);
  }

  const clearFilterSearch = () => {
    setFilterSearch('');
  }

  return (
    <FilterBarWrapper>
      <InputGroupWrapper>
        <LabelElement htmlFor="date">Filter by date:</LabelElement>
        <InputElement 
          type="date" 
          name="date" 
          value={todaysDate} 
          onChange={filterByDate} 
        />
      </InputGroupWrapper>
      <InputGroupWrapper>
        <LabelElement htmlFor="search">Filter by team:</LabelElement>
        <InputElement 
          type="text" 
          name="search" 
          placeholder='Ex: Hawks' 
          onChange={filterByName} 
          value={filterSearch} 
        />
        {
          filterSearch 
        && 
        (<span onClick={clearFilterSearch}>
          <FaTimes />
        </span>)   
        }
      </InputGroupWrapper>
    </FilterBarWrapper>
  );
};

export default FilterBar;