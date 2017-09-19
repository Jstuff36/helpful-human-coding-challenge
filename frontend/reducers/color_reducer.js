import merge from 'lodash/merge';

import {
    RECEIVE_COLORS,
    RECEIVE_SINGLE_COLOR
} from '../actions/colors_actions';

const noColors = Object.freeze({
    colors: null,
    singleColor: null
});

const ColorsReducer = (state = noColors, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_COLORS:
            const colors = action.colors;
            newState = merge({}, state);
            newState.colors = colors;
            return newState;
        case RECEIVE_SINGLE_COLOR:
            const color = action.color;
            newState = merge({}, state);
            newState.color = color;
            return newState;
        default:
            return state;
    }
};

export default ColorsReducer;
