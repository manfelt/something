import React from 'react';
import classes from './weatherdetails.module.css';
import Desc from './desc/desc';
import Temperature from './temperature/temp';
import Date from './date/date';
import Icon from '../../elements/Icon/Icon';

const WeatherDetails = (props) => {
    return (
        <div className={classes.WeatherDetailsWrapper}>
            <div className={classes.WeatherIconWrapper}>
                <Icon type={props.data.descriptio} />
            </div>
            <div className={classes.WeatherDataWrapper}>
                <Temperature degrees={props.data.temperature} />
                <Desc type={props.data.description} />
                <Date />
            </div>
        </div> 
    );
}

export default WeatherDetails;