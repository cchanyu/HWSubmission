import { combineReducers } from 'redux';

const nameReducer = (state = {name: 'Name'}, action) => {

    switch (action.type) {
        case "NAME_CHANGE":
            return { ...state, name: action.payload };
        default:
            return state;
    }
}

export default combineReducers({name: nameReducer});