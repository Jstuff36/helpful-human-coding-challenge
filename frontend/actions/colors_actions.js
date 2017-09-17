import * as APIUti from '../util/colors_api_util';

export const RECEIVE_COLORS = 'RECEIVE_COLORS';
export const RECEIVE_COLOR = 'RECEIVE_COLOR';

export const receiveColors = (colors) => ({
    type: RECEIVE_COLORS,
    colors
});

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
