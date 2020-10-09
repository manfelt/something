import React from 'react';
import dateformat from 'dateformat';
import classes from './date.module.css';

const Date = (props) => {
    const today = new Date();

    return(
        <div className ={classes.DateWrapper}>
            {dateformat =(today, "dddd, mmmm dd")}
        </div>
    );
}

export default Date;