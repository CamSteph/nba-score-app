import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';
import FooterSection from './Section';
import { footerData } from '../../utilities/footerData';

const TopFooterSection = styled.div`
  width: 100%;
  height: 25px;
  padding: 30px 0 120px 0;
  background: ${customStyles.dark_shade_01};
  color: ${customStyles.light_shade_01};
  text-align: center;
  font-size: ${customStyles.large_font_size}px;
  letter-spacing: 1.1px;
  line-height: 185%;

  span{
    color: ${customStyles.accent_shade_03};
  }
`;

const FooterLinkWrapper = styled.footer`
  width: 100%;
  min-height: 300px;
  background: ${customStyles.dark_shade_01};
  color: ${customStyles.light_shade_01};
  display: grid;
  grid-template-columns: repeat(${footerData.length}, 1fr);
  padding: 40px 0;

  @media (max-width: 450px) {
    grid-template-columns: repeat(${Math.floor(footerData.length / footerData.length)}, 1fr);
    grid-gap: 35px;
    padding-top: 80px;
  }
`;

const Footer = () => {
  return (
    <>
    <TopFooterSection>Learn more about <span>us</span>.<br/>We're <span>committed</span> to the game.</TopFooterSection>
    <FooterLinkWrapper>
      {
        footerData
      &&
        footerData.map((data, i) => {
          return (
            <FooterSection 
              key={i}
              title={data.title} 
              items={data.items}
            />
          )
        })
      }
    </FooterLinkWrapper>
    </>
  );
};

export default Footer;