import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';
import { FaTimes, FaSearch } from "react-icons/fa";

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
  min-width: 165px;
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

const InputSearchWrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${customStyles.light_shade_01};
  margin-right: 10px;
`;

const FilterBar = ({
  filterInputsData
}) => {

  return (
    <FilterBarWrapper>
      {filterInputsData.map((inputData, i) => (
        <InputGroupWrapper key={i}>
          <LabelElement htmlFor={inputData?.name}>{inputData?.label}:</LabelElement>
          {
            inputData?.type === 'text' ?
              (
                <InputSearchWrapper>
                <FaSearch />
                <InputElement 
                  type={inputData?.type} 
                  name={inputData?.name}
                  value={inputData?.value}
                  placeholder={inputData?.placeholder}
                  onChange={inputData?.onChange} 
                />
                </InputSearchWrapper>
              )
            :
              (
                <InputElement 
                  type={inputData?.type} 
                  name={inputData?.name}
                  value={inputData?.value}
                  placeholder={inputData?.placeholder}
                  onChange={inputData?.onChange} 
                  min={inputData?.min}
                  max={inputData?.max}
                  title={inputData?.title}
                  // aria-label="HELLO WORLD."
                />
              )
          }
          {
            (inputData?.clearSearch && inputData?.value)
          && 
            (
              <span onClick={inputData?.clearSearch}>
                <FaTimes />
              </span>
            )
          }
        </InputGroupWrapper>
      ))}
    </FilterBarWrapper>
  );
};

export default FilterBar;