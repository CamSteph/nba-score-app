import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';
import { GET_TEAM_DATA_API } from '../../utilities/apiUrls';
import { httpRequest } from '../../utilities/httpRequests';
import { teamColors } from '../../utilities/teamColors';
import SkeletonLoader from '../SkeletonLoader';

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .3);
  display: grid;
  place-items: center;
  z-index: ${props => props.teamClicked ? '5' : '-5'};
`;

const ModalContentWrapper = styled.div`
  background: rgb(0, 0, 0);
  padding: 25px;
  border-radius: 6px;
  color: #fff;
  width: 75vw;
  max-width: 450px;
  min-height: 400px;
  height: auto;
  max-height: 500px;
  z-index: ${props => props.teamClicked ? '5' : '-5'};
  transition: all .5s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  position: relative;
`;

const ModalItemGroup = styled.div`
  width: 100%;
  min-height: 30px;
  background-color: ${props => props.topRow ? '' : 'rgb(15, 15, 15)'};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 20px;
`;

const ModalItemTitle = styled.h3`
  color: ${props => props.topRow ? teamColors[0][props.abbv] : customStyles.light_shade_01};
  font-weight: bold;
  text-decoration: ${props => props.topRow ? 'underline' : ''};
`;

const ModalItemData = styled.span`
  color: #ccc;
  font-size: ${customStyles.medium_font_size}px;
`;

const CloseModalBtn = styled.button`
  outline: none;
  border: none;
  padding: 15px 20px;
  width: 100%;
  border-radius: 6px;
  font-weight: 900;
  text-transform: uppercase;
  background-color: ${customStyles.light_shade_01};
  color: ${customStyles.dark_shade_01};
  cursor: pointer;
`;

const Modal = ({teamClicked, setTeamClicked, teamId}) => {

  const [teamData, setTeamData] = useState([]);
  const [isFetchingData, setisFetchingData] = useState(false);

  useEffect(() => {

    const waitForReturnedData = async () => {
      const returnedTeamData = await httpRequest('get', `${GET_TEAM_DATA_API}${teamId}`, {});
      setTeamData(returnedTeamData.data);
      returnedTeamData.error && console.log(returnedTeamData?.error);
      setisFetchingData(false);
    }

    if(teamId) {
      setisFetchingData(true);
      setTimeout(() => {
        waitForReturnedData();
      }, 600);
    }

  }, [teamId]);

  const closeModal = () => {
    setTeamClicked(!teamClicked);
  };

  return (
    <ModalContainer teamClicked={teamClicked}>
      <ModalContentWrapper teamClicked={teamClicked}>
        {
          isFetchingData
          ?
          (
            <>
            <ModalItemGroup topRow={true}>
              <ModalItemTitle topRow={true} abbv={null}>
                  <SkeletonLoader loaderLength='long' />
              </ModalItemTitle>
              <ModalItemData>
                <SkeletonLoader loaderLength='short' />
                </ModalItemData>
            </ModalItemGroup>
            <ModalItemGroup>
              <ModalItemTitle>
                <SkeletonLoader loaderLength='short' />
                </ModalItemTitle>
              <ModalItemData>
                <SkeletonLoader loaderLength='long' />
                </ModalItemData>
            </ModalItemGroup>
            <ModalItemGroup>
              <ModalItemTitle>
                <SkeletonLoader loaderLength='short' />
                </ModalItemTitle>
              <ModalItemData>
                <SkeletonLoader loaderLength='long' />
                </ModalItemData>
            </ModalItemGroup>
            <ModalItemGroup>
              <ModalItemTitle>
                <SkeletonLoader loaderLength='short' />
                </ModalItemTitle>
              <ModalItemData>
                <SkeletonLoader loaderLength='long' />
                </ModalItemData>
            </ModalItemGroup>
            <ModalItemGroup>
              <ModalItemTitle>
                <SkeletonLoader loaderLength='short' />
                </ModalItemTitle>
              <ModalItemData>
                <SkeletonLoader loaderLength='long' />
                </ModalItemData>
            </ModalItemGroup>
          </>
          )
        :
        (
          <>
          <ModalItemGroup topRow={true}>
            <ModalItemTitle topRow={true} abbv={teamData.abbreviation}>
              {teamData.full_name}
            </ModalItemTitle>
            <ModalItemData>ID #{teamId}</ModalItemData>
          </ModalItemGroup>
          <ModalItemGroup>
            <ModalItemTitle>City:</ModalItemTitle>
            <ModalItemData>{teamData.city}</ModalItemData>
          </ModalItemGroup>
          <ModalItemGroup>
            <ModalItemTitle>Abbreviation:</ModalItemTitle>
            <ModalItemData>{teamData.abbreviation}</ModalItemData>
          </ModalItemGroup>
          <ModalItemGroup>
            <ModalItemTitle>Conference:</ModalItemTitle>
            <ModalItemData>{teamData.conference}ern</ModalItemData>
          </ModalItemGroup>
          <ModalItemGroup>
            <ModalItemTitle>Division:</ModalItemTitle>
            <ModalItemData>{teamData.division}</ModalItemData>
          </ModalItemGroup>
          </>
        )
        }
        <CloseModalBtn onClick={closeModal}>Close</CloseModalBtn>
      </ModalContentWrapper>
    </ModalContainer>
  );
};

export default Modal;