import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from "./row.scss";

class Row extends Component {
    constructor(props){
        super();

        this._handleDelete=this.handleDelete.bind(this);
    }

    render(){
        return(
            <div className= "row" >
                <div className="row_element">
                    {this.props.name}
                </div>
                <div className="row_element">
                    {this.props.artist}
                </div>
                <div className="row_element">
                    {this.props.album}
                </div>

                <a href={this.props.link} className="row_element">
                 Link 
                 </a>
                 <div className="delete-box" onClick= {this._handleDelete}>
                    <svg viewBox="10 10 10 10">
                        <path className="close-x" d="M 10,10 L 20,20 M 20,10 L 10,20" />
                    </svg>
                </div>
            </div>
        )
    }
    handleDelete(){
        this.props.handleDelete(this.props.id);
    }
    
}

Row.propTypes=  {
    name: PropTypes.string,
    artist: PropTypes.string,
    dateAdded: PropTypes.string,
    link: PropTypes.string,
}

export default Row;