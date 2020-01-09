import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUsers, setRoles, setPermissions } from '../../../redux/admin';

const mapStateToProps = state => ({ admin: state.admin });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setUsers,
      setRoles,
      setPermissions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps);
