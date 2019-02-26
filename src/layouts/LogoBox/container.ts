import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './../../redux/layout';

const mapDispatchToProps = (dispatch: Redux.Dispatch) =>
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
