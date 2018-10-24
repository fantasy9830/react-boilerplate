import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './../redux/layout';

const mapStateToProps = state => ({
  layout: state.layout,
  user: state.user,
});

const mapDispatchToProps = dispatch =>
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
