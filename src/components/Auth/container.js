import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { actions } from './../../redux/user';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...actions,
      redirect: pathname => replace(pathname),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
