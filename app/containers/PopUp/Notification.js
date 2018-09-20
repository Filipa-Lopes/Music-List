import React, { Component } from 'react';

import style from './notification.scss';

const notification = props => {
    let className;
        if(props.success){
            className="notification success"
        }
        else{
            className="notification error"
        }

        return (
        <div className={className}>
            {props.text}
            </div>
             
        )
}


export default notification;