import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';
import FooterSection from './Section';
import { footerData } from '../../utilities/footerData';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 300px;
  background: ${customStyles.dark_shade_01};
  color: ${customStyles.light_shade_01};
  display: grid;
  grid-template-columns: repeat(${footerData.length}, 1fr);
  padding: 40px 0;
`;

const ExtendedFooterSection = styled.div`
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

const Footer = () => {
  return (
    <>
    <ExtendedFooterSection>Learn more about <span>us</span>.<br/>We're <span>committed</span> to the game.</ExtendedFooterSection>
    <FooterWrapper>
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
    </FooterWrapper>
    </>
  );
};

export default Footer;