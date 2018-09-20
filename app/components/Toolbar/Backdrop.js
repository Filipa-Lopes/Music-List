import React from 'react';

import style from "./toolbar.scss";

const backdrop = props =>(
    <div className="backdrop" onClick={props.onClick}>                          
    </div>
)



export default backdrop;