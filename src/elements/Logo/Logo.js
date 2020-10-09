import React from 'react';
import classes from './logo.module.css';

const Logo = (props) => {
    let logoWithColorScheme = [
        classes.Logo,
        (props.colorScheme === 'dark') ? classes.Dark : classes.Ligth
    ];
    return (
        <h1 className={logoWithColorScheme.join(' ')} onClick={props.clicked}>
            Været
        </h1>
    )
}

export default Logo;