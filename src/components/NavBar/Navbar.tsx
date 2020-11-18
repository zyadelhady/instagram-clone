import React, { FC } from 'react';
import { BackgroundContainerSecondry } from '../../styled-components/sharedStyles';
import classes from './Navbar.module.scss';
import Logo from '../../assets/logo.png';
import { Container } from '@material-ui/core';
import { SearchBar } from '../SearchBar/SearchBar';
import { HiOutlineHome } from 'react-icons/hi';
import { FiSend, FiHeart } from 'react-icons/fi';
import { FaRegCompass, FaRegUserCircle } from 'react-icons/fa';

export interface NavbarProps {}

export const Navbar: FC<NavbarProps> = (props) => {
  return (
    <BackgroundContainerSecondry className={classes.Container}>
      <Container maxWidth="md">
        <div className={classes.NavBar}>
          <div className={classes.ContainerImage}>
            <img src={Logo} alt="instagram logo" />
          </div>
          <div className={classes.SearchBar}>
            <SearchBar />
          </div>
          <div className={classes.Icons}>
            <HiOutlineHome />
            <FiSend />
            <FaRegCompass />
            <FiHeart />
            <FaRegUserCircle />
          </div>
        </div>
      </Container>
    </BackgroundContainerSecondry>
  );
};
