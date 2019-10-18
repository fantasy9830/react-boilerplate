import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUsers, getRoles, getPermissions } from './../../../redux/admin';

const mapStateToProps = (state: IStoreState) => ({
  admin: state.admin,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch) =>
  bindActionCreators(
    {
      getUsers,
      getRoles,
      getPermissions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
