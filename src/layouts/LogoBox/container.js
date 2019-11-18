import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeActive, clearOpenKeys } from '../../redux/layout';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeActive,
      clearOpenKeys,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps);
