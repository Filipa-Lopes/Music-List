import React from 'react';

import style from "./toolbar.scss";

const sideDrawer = props =>{
    let drawClass = "sideDrawer"
    if(props.show){
        drawClass= "sideDrawer open"
    }
    return(
        <nav className={ drawClass }>                         
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contacts</a></li>
        </ul>
    </nav>

    );
}


export default sideDrawer;