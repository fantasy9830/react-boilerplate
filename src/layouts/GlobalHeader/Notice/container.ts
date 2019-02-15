import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../../redux/layout';

const mapStateToProps = (state: IStoreState) => ({
  data: state.layout.notice,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch) =>
  bindActionCreators(
    {
      clearNotice: actions.clearNotice,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
