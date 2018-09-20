import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from "./toolbar.scss";
import DrawerToggleButton from './DrawerToggleButton';
import OperationMenu from '../OperationMenu/OperationMenu'
const toolbar = props =>(
    <div className= "toolbar">
        <nav className= "toolbar_navigation"  >
            <DrawerToggleButton onClick={props.onSideDrawerClick}/>
            <div className="toolbar_logo">
                <a href='/' >The LOGO </a>
            </div>
            <div className="spacer" />
            <OperationMenu
            input= { props.input }
            handleSearch = { props.handleSearch }
            handleInput = { props.handleInput }
            handleSearchReset = { props.handleSearchReset }
            handleAdition = { props.handleAdition } 
            handleEnterPress = { props.handleEnterPress }/>
        </nav>
    </div>
);



// class Menu extends Component {
//     constructor(props){
//         super(props);

//         this._handleMenuOpen=this.handleMenuOpen.bind(this);
//         this._handleMenuClose=this.handleMenuClose.bind(this);

//     }

//     render(){
//         return(
//             <div>
//             <nav className= {style.navbar} >
//                 <span className="open-slide">
//                     <a href='#' onClick={ this._handleMenuOpen }>
//                         < svg width="30" height="30">
//                             <path d="M0,5 30,5" stroke="#000" strokeWidth="5" />
//                             <path d="M0,14 30,14" stroke="#000" strokeWidth="5" />
//                             <path d="M0,23 30,23" stroke="#000" strokeWidth="5" />
//                         </svg>
//                     </a>
//                 </span>

//                 <ul className="navbar-nav">
//                     <li><a href="#">Home</a></li>
//                     <li><a href="#">About</a></li>
//                     <li><a href="#">Contacts</a></li>
//                 </ul>
//             </nav>

//             <div id="side-menu" className="side-nav">
//                 <a href="#" className="btn-close" onClick={ this._handleMenuClose }>&times;</a>
//                 <a href="#">Home</a>
//                 <a href="#">About</a>
//                 <a href="#">Contacts</a>
//             </div>
//             </div>
//         )
//     }

//     handleMenuOpen(){

//     }

//     handleMenuClose(){

//     }

    
// }



export default toolbar;