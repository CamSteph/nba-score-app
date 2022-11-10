import React, { useState, useEffect } from 'react';
import { GET_PLAYERS_DATA_API } from '../../utilities/apiUrls';
import { httpRequest } from '../../utilities/httpRequests';
import PlayerTable from '../../components/PlayersTable';
import LoadingSpinner from '../../components/LoadingSpinner';

const GetPlayerData = () => {

  const [playersData, setPlayersData] = useState([]);
  const [tableSortStatus, setTableSortStatus] = useState('id-up');

  const sortTable = (data) => {
    // if ( typeof data === 'object' ) return [data];
    switch ( tableSortStatus ) {
      case 'id-down':
        return data.sort((a, b) => {
          const aId = a.id;
          const bId = b.id;
          if ( aId < bId ) return 1;
          else if ( aId > bId ) return -1;
          return 0;
        });
      case 'id-up':
        return data.sort((a, b) => {
          const aId = a.id;
          const bId = b.id;
          if ( aId < bId ) return -1;
          else if ( aId > bId ) return 1;
          return 0;
        });
        case 'first-name-up':
          return data.sort((a, b) => {
            const aId = a.first_name;
            const bId = b.first_name;
            if ( aId < bId ) return -1;
            else if ( aId > bId ) return 1;
            return 0;
          });
        case 'first-name-down':
          return data.sort((a, b) => {
            const aId = a.first_name;
            const bId = b.first_name;
            if ( aId < bId ) return 1;
            else if ( aId > bId ) return -1;
            return 0;
          });
        case 'last-name-up':
          return data.sort((a, b) => {
            const aId = a.last_name;
            const bId = b.last_name;
            if ( aId < bId ) return -1;
            else if ( aId > bId ) return 1;
            return 0;
          });
        case 'last-name-down':
          return data.sort((a, b) => {
            const aId = a.last_name;
            const bId = b.last_name;
            if ( aId < bId ) return 1;
            else if ( aId > bId ) return -1;
            return 0;
          });
      default:
        return data.sort((a, b) => {
          const aId = a.id;
          const bId = b.id;
          if ( aId < bId ) return 1;
          else if ( aId > bId ) return -1;
          return 0;
        });
    }
  }

  useEffect(() => {
    const waitForReturnedData = async () => {
      const returnedPlayersData = await httpRequest('get', GET_PLAYERS_DATA_API, {});
      setPlayersData(sortTable(returnedPlayersData.data));
      returnedPlayersData.error && console.log(returnedPlayersData?.error?.status);
    }

    waitForReturnedData();

  }, [tableSortStatus]);

  const displayPlayerData = (player) => {
    console.log(player);
  }

  return (
    <>
    {
      playersData.length > 0
      ?
        <PlayerTable 
          playersData={playersData} 
          displayPlayerData={displayPlayerData}
          tableSortStatus={tableSortStatus}
          setTableSortStatus={setTableSortStatus}
        />
      :
        <LoadingSpinner />
    }
    </>
  );
};

export default GetPlayerData;