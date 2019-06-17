import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from './../../../redux/user';

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch) =>
  bindActionCreators(
    {
      login,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
