export const RECEIVE_COLORS = 'RECEIVE_COLORS';

export const receiveColors = (colors) => ({
    type: RECEIVE_COLORS,
    colors
});

export const allColors = () => dispatch => (
    dispatch(receiveColors())
);