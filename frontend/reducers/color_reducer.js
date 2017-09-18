import merge from 'lodash/merge';

import {
    RECEIVE_COLORS
} from '../actions/colors_actions';

const noColors = Object.freeze({
    colors: null
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
        default:
            return state;
    }
};

export default ColorsReducer;
