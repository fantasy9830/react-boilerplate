import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './../../redux/user';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signIn: actions.signIn,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
