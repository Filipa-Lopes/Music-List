import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {isEmpty, isEqual} from "lodash";
import InfiniteScroll from 'react-bidirectional-infinite-scroll'

import Row from '../components/Table/Row';
import Table from '../components/Table/Table';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Toolbar from '../components/Toolbar/Toolbar';
import SideDrawer from '../components/Toolbar/SideDrawer';
import Backdrop from '../components/Toolbar/Backdrop';
import NewMusic from '../components/NewMusicMenu/NewMusicMenu';


import Notification from "./PopUp/Notification";
import styles from './musicLister.scss';
import * as actions from '../reducers/actions';
import fs from 'fs-es6';


class MusicLister extends Component {
    constructor(props){
        super(props);

        this._handleSearch= this.handleSearch.bind(this);
        this._handleInput= this.handleInput.bind(this);
        this._handleNewMusicMenu = this.handleNewMusicMenu.bind(this);
        this._handleSearchReset= this.handleSearchReset.bind(this);
        this._handleMenuInput= this.handleMenuInput.bind(this);
        this._handleMenuAlbum= this.handleMenuAlbum.bind(this);
        this._handleMenuArtist= this.handleMenuArtist.bind(this);
        this._handleNewMusic=this.handleNewMusic.bind(this);
        this._handleMenuLink=this.handleMenuLink.bind(this);
        this._handleSaveClick= this.handleSaveClick.bind(this);
        this._handleSideDrawerClick= this.handleSideDrawerClick.bind(this);
        this._handleHorizontalScroll= this.handleHorizontalScroll.bind(this);
        this._handleDelete= this.handleDelete.bind(this);
        this._handleKeyPress= this.handleKeyPress.bind(this);


        this.state= {
            sideDrawerOpen: false,
            input: '',
            addMusicMenuOpen: false,
            notification:'',
            notificate_success: true,
            menu: {
                name: '',
                artist: '',
                album:'',
                dateAdded:'',
                link: ''
            },
        }
    };

    componentWillMount(){
        fs.readFileSync("./musicList.json").then((data)=> {
            this.props.musicSearchResult(JSON.parse(data));
            this.props.loadingList(JSON.parse(data));
        });

    }


    render(){
        let backDrop;
        let table;
        let addMenu;
        let notification;

        const { searchers }= this.props;

        if(this.state.sideDrawerOpen){
            backDrop= <Backdrop onClick= {this._handleSideDrawerClick}/>
        }

        if(this.state.addMusicMenuOpen){
            table= null;
            addMenu=
            <div>
                 <button className="back_button" onClick= { this._handleNewMusicMenu }> -- Back to List </button>
                    <NewMusic searchers={this.props.searchers}
                    nameChange={ this._handleMenuInput }
                    albumChange={ this._handleMenuAlbum }
                    artistChange= { this._handleMenuArtist }
                    linkChange= { this._handleMenuLink }
                    addNew= { this._handleNewMusic }
                    />

            </div>
        }
        else{
            table= 
                <div className="table">
                 <Table searchers= { this.props.searchers } handleDelete={ this._handleDelete }/>
                </div>
            addMenu=null;
        }

        if(searchers.show_notification){
            notification=
                <Notification text={this.state.notification} success={this.state.notificate_success}/>
        }

        return (
            <div className="background">
            { addMenu }
                <Header/>
                { notification }
                <Toolbar 
                onSideDrawerClick= { this._handleSideDrawerClick } 
                input= {searchers.input} 
                handleAdition={ this._handleNewMusicMenu }
                handleSearchReset= { this._handleSearchReset }
                handleSearch={ this._handleSearch }
                handleInput= { this._handleInput }
                handleEnterPress = { this._handleKeyPress }/>
                <SideDrawer show={ this.state.sideDrawerOpen }/>
                { backDrop }   
                { table }
                
                <Footer onSaveClick = { this._handleSaveClick }/>
            </div>
        )
    }


    handleSearch(event){
        const {search, musicSearchResult, showNotification} = this.props;

        search(this.state.input);

        const result=this.searchForMusic();

        if(!isEmpty(result)){
            musicSearchResult(result);
        }
        else{

            this.handleNotification("No Results Found", false);

        }
    }

    handleInput(event){
        this.setState({ input: event.target.value });
    }

    handleKeyPress(event){
        if(event.keyCode=== 13){
            this.handleSearch();
        }
    }

    handleMenuInput(event){
        this.setState({ menu:{ ...this.state.menu, name: event.target.value }});
    }

    handleMenuAlbum(event){
        this.setState({ menu: { ...this.state.menu, album: event.target.value }});
    }

    handleMenuArtist(event){
        this.setState({ menu:{ ...this.state.menu, artist : event.target.value }});
    }

    handleMenuLink(event){
        this.setState({ menu:{ ...this.state.menu, link : event.target.value }});
    }

    handleSearchReset(event){
        const { searchers, musicSearchResult }= this.props;
        musicSearchResult(searchers.original_list);
    }

    handleNewMusicMenu(){
        this.setState((prevState)=>{return{
            addMusicMenuOpen: !prevState.addMusicMenuOpen
        }})
    }

    handleNewMusic(){
        this.props.addMusic(this.state.menu);
        this.handleNewMusicMenu();
        this.handleNotification("Music Added", true)

    }

    searchForMusic(){
        const { searchers } = this.props;
      
        let result = [];
        result = searchers.list_to_display.filter((element)=> { return element.name.toLowerCase() === this.state.input.toLowerCase()});

        if(isEmpty(result)){
            result = searchers.list_to_display.filter((element)=>{ return element.artist.toLowerCase() === this.state.input.toLowerCase()});
        }
        if(isEmpty(result)){
            result = searchers.list_to_display.filter((element)=>{ return element.album.toLowerCase() === this.state.input.toLowerCase()});
        }
        if(isEmpty(result)){
            result=[];
        }

        return result;

    };
    
    handleSaveClick(){
        const { searchers, showNotification }= this.props;
        let saved = true;
        
        fs.exists("./musicList.json", (recal)=>{
                if(!recal){
                    fs.createWriteStream("./musicList.json", searchers.original_list);
                }
            }) 
    
        fs.writeFileSync("./musicList.json", JSON.stringify(searchers.original_list), (err)=>{
            this.handleNotification("Music List NOT Saved", false);
                saved=false;
            });
        
        if(saved){
            this.handleNotification("Music List Saved!", true);
        }


    }

    handleSideDrawerClick(){
        this.setState((prevState)=>{
            return{
                sideDrawerOpen: !prevState.sideDrawerOpen
            }
        });
    }

    handleNotification(text, success){
        const { showNotification } = this.props;

        this.setState({
            notification: text,
            notificate_success: success,
        })

        showNotification(true);

        setTimeout(()=>{
            showNotification(false);
        }, 3000);
    }

    handleHorizontalScroll = (position, previousPosition) => {
        const diffScroll = position - previousPosition
        const direction = diffScroll > 0
          ? 'right'
          : 'left'       
      }

      handleDelete(index){
        this.props.deleteMusic(index);
      }
}

const mapDispatchToProps = {
    search: actions.searchClick,
    musicSearchResult: actions.musicSearchResult,
    addMusic: actions.addMusic,
    loadingList: actions.loadingList,
    showNotification: actions.showNotification,
    deleteMusic: actions.deleteMusic,
};

const mapStateToProps = (state) => ({
    searchers: state._root.entries[1][1],
});

export {
    MusicLister as PureMusicLister,
};

MusicLister.propTypes = {
    musicList: PropTypes.array
}

MusicLister.defaultProps = {
    musicList: [],
};

const MusicListerContainer = compose(
    connect(mapStateToProps, mapDispatchToProps ),
)(MusicLister);



export default MusicListerContainer;