import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './../../redux/layout';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeActive: actions.changeActive,
      clearOpenKeys: actions.clearOpenKeys,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
);
