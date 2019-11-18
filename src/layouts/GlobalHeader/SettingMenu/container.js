import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeActive, clearOpenKeys } from '../../../redux/layout';
import { logout } from '../../../redux/user';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout,
      clearOpenKeys,
      changeActive,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps);
