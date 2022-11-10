import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { customStyles } from '../../../utilities/customStyles';

const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
`;

const SectionTitle = styled.h4`
  color: ${customStyles.light_shade_01};
  font-size: ${customStyles.medium_font_size}px;
  text-align: center;
  text-decoration: underline;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  color: ${customStyles.light_shade_01};
`;

const ListItem = styled.li`
  list-style-type: none;
  font-size: ${customStyles.default_font_size}px;

  a{
    color: ${customStyles.accent_shade_02};

    :hover{
      text-decoration: underline;
      color: ${customStyles.accent_shade_01};
    }
  }
`;

const FooterSection = ({
  title,
  items
}) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <ListWrapper>
        {
          items 
        &&
          (items.map((item, i) => {
            return (<ListItem key={i}><Link to='/more'>{item}</Link></ListItem>)
          }))
        }
        <ListItem>
        </ListItem>
      </ListWrapper>
    </SectionWrapper>
  );
};

export default FooterSection;