import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { customStyles } from '../../utilities/customStyles';

const GraphWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 90%;
`;

const Graph = ({playerData}) => {
  const labels = [playerData.season, '2019', '2017', '1800'].sort((a, b) => a - b, 0);
  const data = {
    labels: labels,
    datasets: [
      {
        label: `Season AVG for ${playerData.season}`,
        backgroundColor: customStyles.medium_shade_01,
        hoverBackgroundColor: customStyles.accent_shade_02,
        borderRadius: 6,
        data: [playerData.pts, 19, 23, 35],
      },
      {
        label: "Assists per game",
        backgroundColor: customStyles.medium_shade_02,
        hoverBackgroundColor: customStyles.accent_shade_02,
        borderRadius: 6,
        data: [playerData.ast, 5, 6, 8],
      },
      {
        label: "Rebounds per game",
        backgroundColor: customStyles.light_shade_01,
        hoverBackgroundColor: customStyles.accent_shade_02,
        borderRadius: 6,
        data: [Number(playerData.oreb) + Number(playerData.dreb), 7, 9, 11],
      },
    ],
    options: {
    }
  };

  return (
    <GraphWrapper>
        <Bar data={data} />
    </GraphWrapper>
  );
};

export default Graph;