import React from 'react';

import styles from './newMusicMenu.scss';

const musicMenu= props =>(
    <div className="menu">
        <form className= "new_music" action="">
            Name
            <input type="text" 
                className= "inputField"
                placeholder= {props.searchers.name}
                onChange= { props.nameChange } /> 
                Album
            <input type="text" 
                className= "inputField"
                placeholder= {props.searchers.album}
                onChange= { props.albumChange } /> 
                Artist
            <input type="text" 
                className= "inputField"
                placeholder= {props.searchers.artist}
                onChange= { props.artistChange } /> 
                Link
            <input type="text" 
                className= "inputField"
                placeholder= {props.searchers.link}
                onChange= { props.linkChange } /> 
        </form>

        <button className= "add_button"
            onClick={props.addNew }> Add new music 
        </button>
    </div>
      
)
export default musicMenu;