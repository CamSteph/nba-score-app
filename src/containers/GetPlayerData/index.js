import React, { useState, useEffect } from 'react';
import { GET_PLAYERS_DATA_API } from '../../utilities/apiUrls';
import { httpRequest } from '../../utilities/httpRequests';
import PlayerTable from '../../components/PlayersTable';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useDebounce } from '../../utilities/useDebounce';
import Modal from '../../components/Modal';

const GetPlayerData = ({filterSearch}) => {

  const [playersData, setPlayersData] = useState([]);
  const [tableSortStatus, setTableSortStatus] = useState('id-up');
  const debounceSearchValue = useDebounce(filterSearch, 700);
  const [playerClicked, setPlayerClicked] = useState(false);
  const [playerId, setPlayerId] = useState('1');
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [singlePlayerData, setSinglePlayerData] = useState([]);

  const sortTable = (data) => {
    switch ( tableSortStatus ) {
      case 'id-down':
        return data.sort((a, b) => {
          if ( a.id < b.id ) return 1;
          else if ( a.id > b.id ) return -1;
          return 0;
        });
      case 'id-up':
        return data.sort((a, b) => {
          if ( a.id < b.id ) return -1;
          else if ( a.id > b.id ) return 1;
          return 0;
        });
        case 'first-name-up':
          return data.sort((a, b) => {
            if ( a.first_name < b.first_name ) return -1;
            else if ( a.first_name > b.first_name ) return 1;
            return 0;
          });
        case 'first-name-down':
          return data.sort((a, b) => {
            if ( a.first_name < b.first_name ) return 1;
            else if ( a.first_name > b.first_name ) return -1;
            return 0;
          });
        case 'last-name-up':
          return data.sort((a, b) => {
            if ( a.last_name < b.last_name ) return -1;
            else if ( a.last_name > b.last_name ) return 1;
            return 0;
          });
        case 'last-name-down':
          return data.sort((a, b) => {
            if ( a.last_name < b.last_name ) return 1;
            else if ( a.last_name > b.last_name ) return -1;
            return 0;
          });
      default:
        return data.sort((a, b) => {
          if ( a.id < b.id ) return 1;
          else if ( a.id > b.id ) return -1;
          return 0;
        });
    }
  }

  useEffect(() => {

    setIsFetchingData(true);

    const waitForReturnedData = async () => {

      const returnedPlayersData = await httpRequest('get', `${GET_PLAYERS_DATA_API}${debounceSearchValue}`, {});

      setPlayersData(sortTable(returnedPlayersData.data));

      returnedPlayersData.error && console.log(returnedPlayersData?.error?.status);

      setIsFetchingData(false);
    }

    waitForReturnedData();

  }, [tableSortStatus, debounceSearchValue]);

  useEffect(() => {

    setIsFetchingData(true);

    const mountPlayerData = () => {

      if(playersData.find(player => player.id === playerId)){

        setSinglePlayerData(playersData.find(player => player.id === playerId));

        setIsFetchingData(false);
      }

    };

    setTimeout(mountPlayerData, 500);
 
    return () => {
      clearTimeout(mountPlayerData);
    }

  }, [playerId]);

  return (
    <>
    {
      playersData.length > 0
      ?
      <>
        <Modal 
          itemClicked={playerClicked} 
          setItemClicked={setPlayerClicked}
          dataId={playerId} 
          data={singlePlayerData} 
          isFetchingData={isFetchingData}
          forTeam={false}
        />
        <PlayerTable 
          playersData={playersData} 
          tableSortStatus={tableSortStatus}
          setTableSortStatus={setTableSortStatus}
          playerId={playerId}
          setPlayerId={setPlayerId}
          playerClicked={playerClicked}
          setPlayerClicked={setPlayerClicked}
        />
      </>
      :
        <LoadingSpinner />
    }
    </>
  );
};

export default GetPlayerData;