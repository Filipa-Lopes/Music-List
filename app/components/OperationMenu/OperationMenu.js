import React from 'react';
import style from './operationMenu.scss';

const operationMenu = props => (
    <div className="search_field">
    <input type="text" 
        className= "search_input"
        placeholder= { props.input }
        onChange= { props.handleInput }
        onKeyUp= { props.handleEnterPress }
        /> 
    <button className= "button"
    onClick={ props.handleSearch }> Search! </button>
    <button className= "button"
    onClick={ props.handleSearchReset }> Reset Search </button>
     <button className= "button"//
    onClick={ props.handleAdition }> Add new music </button>
</div>
);

export default operationMenu;