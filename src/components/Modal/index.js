import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';
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
  z-index: ${props => props.itemClicked ? '5' : '-5'};
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
  z-index: ${props => props.itemClicked ? '5' : '-5'};
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

const Modal = ({
  itemClicked, 
  setItemClicked, 
  dataId,
  data,
  isFetchingData,
  forTeam,
}) => {

  const closeModal = () => {
    setItemClicked(!itemClicked);
  };

  const convertHeight = (feet, inches) => {
    if (!feet) return null;
    return `${feet}' ${inches}"`;
  };

  const convertWeight = (weight) => {
    if (!weight) return null;
    return `${weight} lbs`;
  }

  return (
    <ModalContainer itemClicked={itemClicked}>
      <ModalContentWrapper itemClicked={itemClicked}>
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
          forTeam 
        ?
        (
          <>
          <ModalItemGroup topRow={true}>
            <ModalItemTitle topRow={true} abbv={data?.abbreviation}>
              {data?.full_name || 'NULL'}
            </ModalItemTitle>
            <ModalItemData>ID #{dataId}</ModalItemData>
          </ModalItemGroup>
          <ModalItemGroup>
            <ModalItemTitle>City:</ModalItemTitle>
            <ModalItemData>{data?.city || 'NULL'}</ModalItemData>
          </ModalItemGroup>
          <ModalItemGroup>
            <ModalItemTitle>Abbreviation:</ModalItemTitle>
            <ModalItemData>{data?.abbreviation || 'NULL'}</ModalItemData>
          </ModalItemGroup>
          <ModalItemGroup>
            <ModalItemTitle>Conference:</ModalItemTitle>
            <ModalItemData>{data?.conference ? `${data?.conference}ern` : 'NULL'}</ModalItemData>
          </ModalItemGroup>
          <ModalItemGroup>
            <ModalItemTitle>Division:</ModalItemTitle>
            <ModalItemData>{data?.division || 'NULL'}</ModalItemData>
          </ModalItemGroup>
          </>
        )
        :
        (
          <>
          <ModalItemGroup topRow={true}>
            <ModalItemTitle topRow={true} abbv={null}>
              {data?.first_name}  {data?.last_name}
            </ModalItemTitle>
            <ModalItemData>ID: #{data?.id || '0'}</ModalItemData>
          </ModalItemGroup>
          <ModalItemGroup>
            <ModalItemTitle>Position:</ModalItemTitle>
            <ModalItemData>{data?.position || 'NULL'}</ModalItemData>
          </ModalItemGroup>
          <ModalItemGroup>
            <ModalItemTitle>Height:</ModalItemTitle>
            <ModalItemData>{convertHeight(data?.height_feet, data?.height_inches) || 'NULL'}</ModalItemData>
          </ModalItemGroup>
          <ModalItemGroup>
            <ModalItemTitle>Weight:</ModalItemTitle>
            <ModalItemData>{convertWeight(data?.weight_pounds) || 'NULL'}</ModalItemData>
          </ModalItemGroup>
          <ModalItemGroup>
            <ModalItemTitle>Team:</ModalItemTitle>
            <ModalItemData>{data?.team?.full_name || 'NULL' }</ModalItemData>
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