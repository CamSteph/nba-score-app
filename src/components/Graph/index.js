import React from 'react';
import styled from 'styled-components';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { customStyles } from '../../utilities/customStyles';
import { FaCircle } from 'react-icons/fa';

const GraphWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 90%;
`;

const Graph = ({playerData}) => {
  const labels = [playerData.season];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Points per game",
        backgroundColor: customStyles.medium_shade_01,
        hoverBackgroundColor: customStyles.accent_shade_02,
        borderColor: customStyles.accent_shade_02,
        borderWidth: 2,
        borderRadius: 6,
        data: [playerData.pts],
      },
      {
        label: "Assists per game",
        backgroundColor: customStyles.medium_shade_01,
        hoverBackgroundColor: customStyles.accent_shade_02,
        borderColor: customStyles.accent_shade_02,
        borderWidth: 2,
        borderRadius: 6,
        data: [playerData.ast],
      },
      {
        label: "Rebounds per game",
        backgroundColor: customStyles.medium_shade_01,
        hoverBackgroundColor: customStyles.accent_shade_02,
        borderColor: customStyles.accent_shade_02,
        borderWidth: 2,
        borderRadius: 6,
        data: [Number(playerData.oreb) + Number(playerData.dreb)],
      },
    ],
    options: {
      // scales: {
      //   y: {
      //     beginAtZero: true
      //   }
      // },
      plugins: {
        legend: {
          display: false
        }
      },
      layout: {
        padding: 200
      }
    }
  };
  return (
    <GraphWrapper>
      <Bar data={data} />
      {/* Points */}
    </GraphWrapper>
  );
};

export default Graph;