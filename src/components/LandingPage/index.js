import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';

const LandingPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${customStyles.medium_shade_01};
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>This is the Landing Page.</LandingPageContainer>
  );
};

export default LandingPage;