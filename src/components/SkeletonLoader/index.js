import React from 'react';
import styled, { keyframes } from 'styled-components';

const loader = keyframes`
  0%, 100%{
    background: rgba(255, 255, 255, .2);
  }
  50%{
    background: rgba(255, 255, 255, .6);
  }
`;

const LoaderWrapper = styled.div`
  width: ${props => {
    switch(props.loaderLength){
      case 'small':
        return '150px';
      case 'long':
        return '215px';
      default:
        return '150px';
    }
  }};
  min-width: 150px;
  height: 100%;
  min-height: 30px;
  padding: 5px;
  border-radius: 6px;
  animation: ${loader} .7s ease-in infinite;
`;

const SkeletonLoader = ({loaderLength = 'short'}) => {
  return (
    <LoaderWrapper loaderLength={loaderLength}></LoaderWrapper>
  );
};

export default SkeletonLoader;