import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './../../redux/layout';

const mapStateToProps = state => ({
  current: state.layout.current,
  openKeys: state.layout.openKeys,
  permissions: state.user.permissions,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeActive: actions.changeActive,
      setOpenKeys: actions.setOpenKeys,
      clearOpenKeys: actions.clearOpenKeys,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
