import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';
import GetPlayerData from '../../containers/GetPlayerData';
import FilterBar from '../../containers/FilterBar';

const PlayersPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 120px 50px 50px;
  background: ${customStyles.medium_shade_01};
  color: ${customStyles.light_shade_01};
`;

const PlayersPageTitle = styled.h1`
  text-align: center;
  padding-bottom: 20px;
  color: ${customStyles.light_shade_01};

  strong{
    color: ${customStyles.accent_shade_03};
  }
`;

const PlayersPage = () => {
  return (
    <PlayersPageWrapper>
      <PlayersPageTitle>View your <strong>favorite</strong> players!</PlayersPageTitle>
      <FilterBar />
      <GetPlayerData />
    </PlayersPageWrapper>
  );
};

export default PlayersPage;