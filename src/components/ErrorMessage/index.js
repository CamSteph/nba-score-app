import React from 'react';
import styled from 'styled-components';
import { FaFrown } from 'react-icons/fa';

const ErrorMessageWrapper = styled.div`
  width: 70%;
  height: auto;
  border: 1px solid tomato;
  padding: 20px;
  padding-bottom: 40px;
  border-radius: 6px;
  position: absolute;
  display: grid;
  place-items: center;
`;

const ErrorMsg = styled.h1`
  text-align: center;
  color: tomato;
  text-transform: uppercase;
  white-space: no-wrap;

  .err-msg{
    letter-spacing: 2.8px;
  }
`;

const ErrorMessage = ({errorStatus}) => {
  return (
    <ErrorMessageWrapper>
      <ErrorMsg>
        {
          errorStatus === '404' 
          ?
            (<span className='err-msg'>No games found <FaFrown /></span>)
          :
            (<span className='err-msg'>No games found <FaFrown /></span>)
            // "Something went wrong :("
        }
      </ErrorMsg>
    </ErrorMessageWrapper>
  );
};

export default ErrorMessage;