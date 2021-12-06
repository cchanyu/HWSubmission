import { combineReducers } from 'redux';

const nameReducer = (state = {text: ''}, action) => {

    switch (action.type) {
        case "TEXT_CHANGE":
            return { ...state, text: action.payload };
        default:
            return state;
    }
}

export default combineReducers({text: nameReducer});