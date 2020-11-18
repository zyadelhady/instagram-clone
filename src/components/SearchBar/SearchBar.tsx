import React, { FC } from 'react';
import { InputMainBg } from '../../styled-components/sharedStyles';
import classes from './SearchBar.module.scss';
import { GrFormSearch } from 'react-icons/gr';

export interface SearchBarProps {}

export const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className={classes.InputContainer}>
      <GrFormSearch />
      <InputMainBg type="text" className={classes.Input} />
    </div>
  );
};
