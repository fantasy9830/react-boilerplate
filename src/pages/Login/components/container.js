import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../../redux/user';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps);
