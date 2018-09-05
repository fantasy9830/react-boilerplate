import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './../../redux/layout';

const mapStateToProps = state => ({
  data: state.layout.notice,
});

const mapDispatchToProps = dispatch =>
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

