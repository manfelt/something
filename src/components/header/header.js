import React from 'react';
import classes from './header.module.css';
import Logo from '../../elements/Logo/Logo';

const Header = (props) => {
  return ( 
    <header className={classes.Footer}>
      <Logo colorScheme='dark' clicked={props.onClickHandler} />
    </header>
  );
}

export default Header;

