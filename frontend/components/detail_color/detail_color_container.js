import { connect } from 'react-redux';
import DetailColor from './colors';
import {
    allColors
} from '../../actions/colors_actions';

const mapStateToProps = ({ single_color }) => ({
    colors: colors.colors
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(DetailColor);