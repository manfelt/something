import React from 'react';
import classes from 'temp.module.css';

const Temperature = (props) => {
    return(
        <div className={classes.TemperatureWrapper}>
            {Math.round(props.degrees)}<span className={classes.TemperatureSymbol}>°</span>
        </div>
    );
    
}

export default Temperature;