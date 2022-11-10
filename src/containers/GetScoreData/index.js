import React from 'react';
import { useState, useEffect } from 'react';
import { httpRequest } from '../../utilities/httpRequests';
import { GET_GAME_DATA_API } from '../../utilities/apiUrls';
import ScoreCard from '../../components/ScoreCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import Modal from '../../components/Modal';
import { useDebounce } from '../../utilities/useDebounce';

const GetScoreData = ({
  todaysDate,
  filterSearch,
  setFilterSearch,
}) => {

  const [scoreData, setScoreData] = useState([]);
  const [scoreDataError, setScoreDataError] = useState('');
  const [teamClicked, setTeamClicked] = useState(false);
  const [teamId, setTeamId] = useState('1');
  // const [isSearching, setIsSearching] = useState(false);
  const debounceSearchValue = useDebounce(filterSearch, 700);

  const sortGames = (data) => {
    return data.sort((a, b) => {

      const aHour = Number(a.status.split(' ')[0].split(':')[0]);
      const bHour = Number(b.status.split(' ')[0].split(':')[0]);
      const aMinute = Number(a.status.split(' ')[0].split(':')[1]);
      const bMinute = Number(b.status.split(' ')[0].split(':')[1]);

      const aPeriod = Number(a.period);
      const bPeriod = Number(b.period);

      if(aPeriod < bPeriod){
        return 1;
      }
      else if ( aPeriod > bPeriod ) {
        return -1;
      }
      else if ( aHour < bHour ) {
        return -1;
      }
      else if ( aHour > bHour ) {
        return 1;
      }
      else if ( aMinute < bMinute ) {
        return -1;
      }
      else if ( bMinute > aMinute ) {
        return 1;
      }
      return 0;
    });
  };

  useEffect(() => {

    const waitForReturnedData = async () => {
      // if ( debounceSearchValue ) {
      //   setIsSearching(true);
      // }
      // else {
      //   setIsSearching(false)
      // }
      const returnedGameData = await httpRequest('get', GET_GAME_DATA_API, {
        dates: [
          todaysDate,
        ],
      });

      setScoreData(sortGames(returnedGameData.data).filter(score => {
        if ( !debounceSearchValue ) return true;
        return (
          score?.visitor_team?.name.toLowerCase().includes(debounceSearchValue.toLowerCase()) 
        || 
          score?.home_team?.name.toLowerCase().includes(debounceSearchValue.toLowerCase())
        );
      }));
      returnedGameData.error && setScoreDataError(returnedGameData?.error?.status);
      (!returnedGameData.error && scoreData.length < 1) && setScoreDataError('404');
    }
    
    waitForReturnedData();
  }, [debounceSearchValue, todaysDate, scoreData.length]);

  return (
    <>
    <Modal teamClicked={teamClicked} setTeamClicked={setTeamClicked} teamId={teamId}/>
    {
      scoreData?.length > 0 
      ?
        scoreData.map((score, i) => {
          return (
            <ScoreCard 
              key={score.id}

              homeTeamAbbreviation={score?.home_team?.abbreviation}
              homeTeamName={score?.home_team?.name}
              homeTeamScore={score?.home_team_score}
              homeTeamId={score?.home_team?.id}
              
              visitorTeamAbbreviation={score?.visitor_team?.abbreviation}
              visitorTeamName={score?.visitor_team?.name}
              visitorTeamScore={score?.visitor_team_score}
              visitorTeamId={score?.visitor_team?.id}

              period={score?.period}
              gameStatus={score?.status}

              teamClicked={teamClicked}
              setTeamClicked={setTeamClicked}
              teamId={teamId}
              setTeamId={setTeamId}
            >
            </ScoreCard>
          )
        })
      :
        scoreDataError === ''
        ?
          (<LoadingSpinner />)
        : 
          (<ErrorMessage errorStatus={scoreDataError} />)
    }
    </>
  );
};

export default GetScoreData;