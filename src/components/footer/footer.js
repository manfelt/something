import React from 'react';
import Logo from '../../elements/Logo/Logo';
import classes from './footer.module.css';

const Footer = (props) => {
    return(
        <footer className={classes.Footer}>
            <Logo colorScheme='dark' clicked={props.onClickHandler} />
            <div className={classes.Separator}></div>
        </footer>
    );
}

export default Footer;