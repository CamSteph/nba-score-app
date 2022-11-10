import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utilities/customStyles';
import { FaBasketballBall } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  width: 100%;
  height: ${props => props.isShrunk ? '3rem' : '4.8rem'};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  background: linear-gradient(193deg, orange, #a32673);
  color: ${customStyles.light_shade_01};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all .5s ease;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;

  a{
    display: flex;
    justify-items: space-around;
    color: ${customStyles.light_shade_01};
  }
`;

const LogoText = styled.h2`
  margin-left: 10px;
`;

const NavWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
`;

const LinkWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  li a{
    color: ${customStyles.light_shade_01};
    transition: color .5s ease;
    font-weight: bold;
  }

  li a:hover{
    color: ${customStyles.accent_shade_02};
  }

`;

const Header = () => {

  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setIsHeaderShrunk((isHeaderShrunk) => {
        if ( 
            !isHeaderShrunk 
            && 
            (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
          ) {
            return true;
        }
        if (
          isHeaderShrunk 
          &&
          (document.body.scrollTop < 4 || document.documentElement.srollTop < 4)
        ) {
          return false;
        }
        return isHeaderShrunk;
      })
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };

  }, []);

  return (
    <HeaderWrapper isShrunk={isHeaderShrunk}>
      <LogoWrapper>
        <Link to='/'>
          <FaBasketballBall size={customStyles.large_font_size} />
          <LogoText>Player's League</LogoText>
        </Link>
      </LogoWrapper>
      <NavWrapper>
        <LinkWrapper>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/players'>Players</Link></li>
        <li><Link to='/more'>More</Link></li>
        </LinkWrapper>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;