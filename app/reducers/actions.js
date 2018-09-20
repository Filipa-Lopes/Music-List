import * as actionTypes from './actionTypes';

export const searchClick = (value) => (dispatch) => {
    dispatch({ type: actionTypes.SEARCH,  payload: value});
};

export const musicSearchResult = (value) => (dispatch) => {
    dispatch({type: actionTypes.SEARCH_RESULT, payload: value});
};


export const addMusic = (value) => (dispatch) => {
    const date= new Date();
    const formattedDate= date.getDay()+'/'+date.getMonth()+'/'+ date.getFullYear();
    value.dateAdded= formattedDate;
    dispatch({type: actionTypes.ADD_MUSIC, payload: value});
};

export const deleteMusic = (value) => (dispatch) => {
    dispatch({type: actionTypes.DELETE_MUSIC, payload: value});
};


export const loadingList = (list) => (dispatch) => {
    dispatch({type: actionTypes.LOAD_LIST, payload:list});
};

export const showNotification = (value) => (dispatch )=> {
    dispatch({type: actionTypes.SHOW_NOTIFICATION, payload: value});
}