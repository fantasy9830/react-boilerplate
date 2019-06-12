import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { collapse } from './../redux/layout';
import { refreshToken } from './../redux/user';

const mapStateToProps = (state: IStoreState) => ({
  layout: state.layout,
  user: state.user,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch) =>
  bindActionCreators(
    {
      collapse: collapse,
      refreshToken: refreshToken,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
