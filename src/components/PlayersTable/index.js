import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const PlayerTableWrapper = styled.table`
  width: 100%;
  background: rgba(255, 225, 225, 0.10);
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  border-collapse:collapse;
`;

const TableRow = styled.tr`

`;

const TableHeader = styled.th`
  background: rgba(0, 0, 0, .5);
  padding: 15px;

  :first-child{
    border-top-left-radius: 10px;
  }

  :last-child{
    border-top-right-radius: 10px;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: center;

    .caret-wrapper{
      display: flex;
      flex-direction: column;
      margin-left: 5px;
      cursor: pointer;
      
      .clicked{
        color: ${customStyles.accent_shade_03} !important;
      }
    }

  }
`;

const TableData = styled.td`
  padding: 10px;
`;

const TableHead = styled.thead`
  border-radius: 6px;
`;

const TableBody = styled.tbody`
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;

  :nth-child(even) {
    background: rgba(255, 255, 255, .2);
    transition: all .5s ease;

    :hover{
      background: rgba(255, 255, 255, .4);
    }
  }

  :nth-child(odd) {
    transition: all .5s ease;

    :hover{
      background: rgba(255, 255, 255, .09);
    }
  }
`;

const PlayerTable = ({
  playersData, 
  displayPlayerData,
  tableSortStatus,
  setTableSortStatus,
}) => {

  const setFilter = (newStatus) => {
    setTableSortStatus(newStatus)
  };

  return (
    <PlayerTableWrapper>
      <TableHead>
        <TableRow>
            <TableHeader>
              <div>
                <span>ID:</span>
                <div className='caret-wrapper'>
                  <FaCaretUp data-caret-btn onClick={() => setFilter('id-up')} className={tableSortStatus === 'id-up' ? 'clicked' : ''} />
                  <FaCaretDown data-caret-btn onClick={() => setFilter('id-down')} className={tableSortStatus === 'id-down' ? 'clicked' : ''} />
                </div>
              </div>
            </TableHeader>
            <TableHeader>
            <div>
                <span>First name:</span>
                <div className='caret-wrapper'>
                  <FaCaretUp data-caret-btn onClick={() => setFilter('first-name-up')} className={tableSortStatus === 'first-name-up' ? 'clicked' : ''} />
                  <FaCaretDown data-caret-btn onClick={() => setFilter('first-name-down')} className={tableSortStatus === 'first-name-down' ? 'clicked' : ''} />
                </div>
              </div>
            </TableHeader>
            <TableHeader>
            <div>
                <span>Last name:</span>
                <div className='caret-wrapper'>
                  <FaCaretUp data-caret-btn onClick={() => setFilter('last-name-up')} className={tableSortStatus === 'last-name-up' ? 'clicked' : ''} />
                  <FaCaretDown data-caret-btn onClick={() => setFilter('last-name-down')} className={tableSortStatus === 'last-name-down' ? 'clicked' : ''} />
                </div>
              </div>
            </TableHeader>
        </TableRow>
      </TableHead>
    {
      playersData.length > 0 
      &&
      playersData.map((player, i) => {
        return (
          <TableBody key={i} onClick={() => displayPlayerData(player)}>
            <TableRow>
              <TableData>{player.id}</TableData>
              <TableData>{player.first_name}</TableData>
              <TableData>{player.last_name}</TableData>
            </TableRow>
          </TableBody>
        )
      })
    }
    </PlayerTableWrapper>
  )
}

export default PlayerTable;