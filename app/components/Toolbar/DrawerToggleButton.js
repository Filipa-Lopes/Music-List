import React from 'react';

import style from "./toolbar.scss";

const drawerToggleButton = props =>(
    <div className="drawerToggleButton" onClick={ props.onClick }>                         
        < svg >
            <path d="M0,5 30,5" stroke="#000" strokeWidth="5" />
            <path d="M0,14 30,14" stroke="#000" strokeWidth="5" />
            <path d="M0,23 30,23" stroke="#000" strokeWidth="5" />
        </svg>   
    </div>
)



export default drawerToggleButton;