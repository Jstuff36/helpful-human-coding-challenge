import { connect } from 'react-redux';
import Colors from './colors';
import {
    allColors,
    searchColors
} from '../../actions/colors_actions';

const mapStateToProps = ( {colors} ) => ({
    colors: colors.colors,
    colorsFiltered: colors.colorsFiltered
});

const mapDispatchToProps = (dispatch) =>  ({
    allColors: () => dispatch(allColors()),
    searchColors: (text) => dispatch(searchColors(text))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Colors);