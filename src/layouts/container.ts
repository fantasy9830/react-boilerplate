import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './../redux/layout';

const mapStateToProps = (state: IStoreState) => ({
  layout: state.layout,
  user: state.user,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch) =>
  bindActionCreators(
    {
      collapse: actions.collapse,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
