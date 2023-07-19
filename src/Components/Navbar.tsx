import React from 'react';
import { CodeBracketsSquare } from 'iconoir-react';
import { NavBar, H1, HomeLink } from '../Styles/NavBarStyles';

export const Navbar = () => {
  return (
    <NavBar>
      <H1><CodeBracketsSquare />&nbsp;IT salaries.2020</H1>
      <HomeLink to="/">home</HomeLink>
    </NavBar>
  )
}