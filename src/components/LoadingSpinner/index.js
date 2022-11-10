import React from 'react';
import styled, { keyframes } from 'styled-components';
import { customStyles } from '../../utilities/customStyles';


const spinner = keyframes`
  to {transform: rotate(360deg);}
`;

const LoadingSpinnerWrapper = styled.span`

  ::before{
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 47%;
    width: 90px;
    height: 90px;
    margin-top: 20px;
    margin-left: -10px;
    border-radius: 50%;
    border-top: 4px solid ${customStyles.light_shade_01};
    border-right: 2px solid transparent;
    animation: ${spinner} .6s linear infinite;
  }
`;

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerWrapper />
  )
}

export default LoadingSpinner