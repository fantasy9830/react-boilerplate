import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeActive, clearOpenKeys } from './../../../redux/layout';
import { logout } from './../../../redux/user';

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch) =>
  bindActionCreators(
    {
      logout,
      clearOpenKeys,
      changeActive,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
