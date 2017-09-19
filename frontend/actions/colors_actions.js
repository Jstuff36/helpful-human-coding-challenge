import * as APIUti from '../util/colors_api_util';

export const RECEIVE_COLORS = 'RECEIVE_COLORS';
export const RECEIVE_SINGLE_COLOR = 'RECEIVE_SINGLE_COLOR';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveColors = (colors) => ({
    type: RECEIVE_COLORS,
    colors
});

export const receiveSingleColor = (color) => ({
    type: RECEIVE_SINGLE_COLOR,
    color
});

export const receiveSearch = (colors) => ({
    type: RECEIVE_SEARCH,
    colors
});

export const singleColor = (color) => dispatch => {
    dispatch(receiveSingleColor(color));
};

export const searchColors = (colors) => dispatch => {
    dispatch(receiveSearch(colors));
};

export const allColors = () => dispatch => {
    return APIUti.getAllColors().then(
        resp => {
            if (resp.ok) {
                return resp.json().then(
                    (colors) => {
                        dispatch(receiveColors(colors));
                    }
                );
            }
        }
    );
};