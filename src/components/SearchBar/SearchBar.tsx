import React, { FC } from 'react';
import { BackgroundContainerMain } from '../../styled-components/sharedStyles';
import classes from './SearchBar.module.scss';
import { BiSearch } from 'react-icons/bi';

export interface SearchBarProps {}

export const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <BackgroundContainerMain className={classes.InputContainer}>
      <BiSearch />
      <input type="text" className={classes.Input} placeholder="Search" />
    </BackgroundContainerMain>
  );
};
