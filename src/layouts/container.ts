import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { collapse } from './../redux/layout';

const mapStateToProps = (state: IStoreState) => ({
  layout: state.layout,
  user: state.user,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch) =>
  bindActionCreators(
    {
      collapse: collapse,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
