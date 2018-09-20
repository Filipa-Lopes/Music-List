import * as actionTypes from './actionTypes.js';
import initialState from './initialState.js';
//import musicListMock from '../mocks/musicListMock.js';

function searchReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.SEARCH:
            return {
                ...state, 
                input: action.payload,
            };

        case actionTypes.SEARCH_RESULT:
            return {
                ...state,
                list_to_display: action.payload,
            };
        
        case actionTypes.ADD_MUSIC:
            return {
                ...state,
                list_to_display: [ action.payload, ...state.list_to_display ],
                original_list: [ action.payload, ...state.original_list ],
            };

        case actionTypes.DELETE_MUSIC:
        state.list_to_display.splice(action.payload,1);
        state.original_list.splice(action.payload,1);
        return{
                ...state,
            list_to_display: state.list_to_display,
            original_list: state.original_list,
            }
        
        case actionTypes.LOAD_LIST:
            return {
                ...state,
                original_list: action.payload,
            }
        
        case actionTypes.SHOW_NOTIFICATION:
            return {
                ...state,
                show_notification: action.payload,
            }

        default: 
            return state;
    }
    return state;
}

export default searchReducer;
