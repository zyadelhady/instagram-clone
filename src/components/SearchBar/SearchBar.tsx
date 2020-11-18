import React, { FC } from 'react';
import { BackgroundContainerMain } from '../../styled-components/sharedStyles';
import classes from './SearchBar.module.scss';
import { GrFormSearch } from 'react-icons/gr';

export interface SearchBarProps {}

export const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <BackgroundContainerMain className={classes.InputContainer}>
      <GrFormSearch />
      <input type="text" className={classes.Input} />
    </BackgroundContainerMain>
  );
};
