import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUsers, getRoles, getPermissions } from '../../../redux/admin';

const mapStateToProps = state => ({ admin: state.admin });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUsers,
      getRoles,
      getPermissions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps);
