import { combineReducers } from 'redux';

import colorReducer from './color_reducer';

const RootReducer = combineReducers({
    colors: colorReducer
});

export default RootReducer;
