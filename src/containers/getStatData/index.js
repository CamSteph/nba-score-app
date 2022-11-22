import React, { useState, useEffect } from 'react';
import { httpRequest } from '../../utilities/httpRequests';
import { GET_SEASON_AVERAGES_DATA_API } from '../../utilities/apiUrls';
import { useDebounce } from '../../utilities/useDebounce';
import StatDisplay from '../../components/StatDisplay';
import { customStyles } from '../../utilities/customStyles';

const GetStatData = ({
  selectedYear,
  pId,
  playerName,
  allSelectedYears,
  isRemoving,
  yearToRemove,
}) => {

  const [statData, setStatData] = useState([]);
  const [statDataError, setStatDataError] = useState('');
  const debounceSearchValue = useDebounce(selectedYear, 700);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [playerId, setPlayerId] = useState(pId);

  const firstSelectedYear = allSelectedYears[0];
  const secondSelectedYear = allSelectedYears[1];
  const thirdSelectedYear = allSelectedYears[2];

  useEffect(() => {

    setIsFetchingData(true);

    const waitForReturnedData = async (year) => {

      const returnedStatData = await httpRequest('get', `${GET_SEASON_AVERAGES_DATA_API}`, {
        season: year,
        player_ids: [playerId]
      });

      if ( !isRemoving && statData.length <= 3 && returnedStatData.data[0] ) {
        setStatData(prev => [...prev, returnedStatData.data[0]]);
      }
      else if ( !isRemoving && statData.length <= 3 && !returnedStatData.data[0]) {
        setStatData(prev => [...prev, {
          season: year,
          id: null,
          pts: 0,
          ast: 0,
          oreb: 0,
          dreb: 0,
          fg3_pct: 0,
          fg_pct: 0,
          min: 0,
          stl: 0,
          blk: 0,
          turnover: 0,
          games_played: 0,
        }]);
      }
      else if ( isRemoving && statData.length > 0) {
        setStatData(prev => {
          return [...prev].filter(entry => entry?.season.toString() != yearToRemove);
        });
      }

      if (returnedStatData.error) {
        console.error(returnedStatData?.error?.status);
        setStatDataError(returnedStatData?.error?.status);
      }
      else if (!returnedStatData.error && statData?.length === 0){
        setStatDataError('404');
      }

      setIsFetchingData(false);
    };

    switch (allSelectedYears.length) {
      case 1:
        waitForReturnedData(firstSelectedYear);
        break;
      case 2:
        waitForReturnedData(secondSelectedYear);
        break;
      case 3:
        waitForReturnedData(thirdSelectedYear);
        break;
      default:
        waitForReturnedData(firstSelectedYear);
    }

  }, [playerId, firstSelectedYear, secondSelectedYear, thirdSelectedYear]);

  return (
    statData
    ?
    <StatDisplay data={statData} playerName={playerName} lastSelectedYear={allSelectedYears[allSelectedYears.length - 1]} />
    :
    (<h1>No stats found for <strong style={{"color":customStyles.accent_shade_03}}>{playerName}</strong> for {debounceSearchValue} season</h1>)
  )
}

export default GetStatData