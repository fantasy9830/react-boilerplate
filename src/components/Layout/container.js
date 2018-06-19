import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './../../redux/layout';

const mapStateToProps = state => ({
  layout: state.layout,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...actions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
