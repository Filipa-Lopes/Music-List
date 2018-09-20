import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from "./layout.scss";

const footer = props => (
    <div className= "footer" >        
    <button className= "save_button"
        onClick={props.onSaveClick}>Save Current List</button>
    </div>
)


export default footer;