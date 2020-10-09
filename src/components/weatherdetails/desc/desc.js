import React from 'react';

import classes from './desc.module.css';

const Desc = (props) => {
    return(
        <div className={classes.DescriptionWrapper}>
            {props.type}
        </div>
    );
}

export default Desc;