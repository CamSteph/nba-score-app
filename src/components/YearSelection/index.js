import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';
import { formatDate } from '../../utilities/formatDate';

const YearSelectionWrapper = styled.section`
  width: 92%;
  min-height: 80px;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  background: rgba(255, 225, 225, 0.10);
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const YearWrapper = styled.div`
  width: 3.8rem;
  height: 2rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, .4);
  color: ${customStyles.light_shade_01};
  font-size: ${Number(customStyles.default_font_size) + 6}px;
  display: grid;
  place-items: center;
  margin: 5px;
  cursor: pointer;
  opacity: .5;
  
  &:hover{
    border: 2px solid rgb(255, 255, 255);
  }

  .year-selected {
    opacity: 1;
  }
`;

const YearSelection = ({
  allSelectedYears,
  setAllSelectedYears,
  setIsRemoving,
}) => {

  const calculateNumberOfYears = () => {
    return Number(formatDate().split('-')[0]) - 1970;
  };

  const startYear = 1970;

  let numberOfYears = Array(calculateNumberOfYears())
    .fill()
    .map((_, i) => (
      {'year': startYear + ( i + 1 ), 'selected': false}
    ));

    const toggleSelection = (e) => {

      const element = e.target;
      const year = element.innerText;

      if(allSelectedYears.length < 3 && !allSelectedYears.includes(year)) {
        setIsRemoving(false);
        setAllSelectedYears(prev => [...prev, year]);
        element.style.opacity = '1';
      }
      else if (allSelectedYears.includes(year)) {
        setIsRemoving(true);
        setAllSelectedYears(prev => prev.filter(val => val !== year));
        element.style.opacity = '.5';
      }

    };

  return (
    <YearSelectionWrapper>
      {
        numberOfYears.map((entry, id) => (
          <YearWrapper 
            key={id} 
            style={{opacity: entry.year.toString() === allSelectedYears[0] ? '1' : '.5'}} 
            onClick={e => toggleSelection(e)}
          >
            {entry.year}
          </YearWrapper>
        ))
      }
    </YearSelectionWrapper>
  );
};

export default YearSelection;