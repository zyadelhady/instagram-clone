import { Container } from '@material-ui/core';
import React, { FC } from 'react';
import { Navbar } from '../../components/NavBar/Navbar';
import classes from './Layout.module.scss';

export interface LayoutProps {}

export const Layout: FC<LayoutProps> = (props) => {
  return <Navbar />;
};
