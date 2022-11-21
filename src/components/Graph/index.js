import React from 'react';
import styled from 'styled-components';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const GraphWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 90%;
`;

const Graph = ({playerData}) => {

  const labels = playerData.map(entry => entry.season).sort((a, b) => a - b, 0);

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Pts per game`,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        hoverBackgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 2,
        borderRadius: 6,
        data: playerData.sort((a, b) => Number(a.season) - Number(b.season), 0).map(d => d?.pts),
      },
      {
        label: "Assists per game",
        backgroundColor: 'rgba(34, 112, 205, 0.5)',
        hoverBackgroundColor: 'rgba(34, 112, 205, 1)',
        borderColor: ['rgba(34, 112, 205, 1)'],
        borderWidth: 2,
        borderRadius: 6,
        data: playerData.sort((a, b) => Number(a.season) - Number(b.season), 0).map(d => d?.ast),
      },
      {
        label: "Rebounds per game",
        backgroundColor: 'rgba(10, 62, 165, 0.5)',
        hoverBackgroundColor: 'rgba(40, 72, 165, 1)',
        borderColor: ['rgba(40, 72, 165, 1)'],
        borderWidth: 2,
        borderRadius: 6,
        data: playerData.sort((a, b) => Number(a.season) - Number(b.season), 0).map(d => Number(d?.oreb) + Number(d?.dreb)),
      },
    ],
  };

  return (
    <GraphWrapper>
        <Bar data={data} />
    </GraphWrapper>
  );
};

export default Graph;