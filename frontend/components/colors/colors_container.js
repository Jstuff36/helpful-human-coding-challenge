import { connect } from 'react-redux';
import Colors from './colors';
import {
    allColors
} from '../../actions/colors_actions';

const mapStateToProps = ( {colors} ) => ({
    colors: colors.colors
});

const mapDispatchToProps = (dispatch) =>  ({
    allColors: () => dispatch(allColors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Colors);