import React, { useState, useEffect } from 'react';
import { httpRequest } from '../../utilities/httpRequests';
import { GET_SEASON_AVERAGES_DATA_API } from '../../utilities/apiUrls';
import { useDebounce } from '../../utilities/useDebounce';
import StatDisplay from '../../components/StatDisplay';

const GetStatData = ({
  filterSearch, 
  selectedYear,
  pId,
  playerName,
}) => {

  const [statData, setStatData] = useState({});
  const [statDataError, setStatDataError] = useState('');
  const debounceSearchValue = useDebounce(selectedYear, 700);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [playerId, setPlayerId] = useState(pId);

  useEffect(() => {

    setIsFetchingData(true);

    const waitForReturnedData = async () => {

      const returnedStatData = await httpRequest('get', `${GET_SEASON_AVERAGES_DATA_API}`, {
        season: debounceSearchValue,
        player_ids: [playerId]
      });

      setStatData(returnedStatData.data[0]);

      if (returnedStatData.error) {
        console.log(returnedStatData?.error?.status);
        setStatDataError(returnedStatData?.error?.status);
      }
      else if (!returnedStatData.error && statData?.length === 0){
        setStatData('404');
      }

      setIsFetchingData(false);
    };

    waitForReturnedData();

  }, [debounceSearchValue, playerId, statData?.length]);

  return (
    statData
    ?
    <StatDisplay data={statData} playerName={playerName} />
    :
    (<h1>No stats found {playerName} this player for {debounceSearchValue} season</h1>)
  )
}

export default GetStatData