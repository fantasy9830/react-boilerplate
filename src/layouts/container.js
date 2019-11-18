import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { collapse } from '../redux/layout';
import { getProfile } from '../redux/user';

const mapStateToProps = state => ({
  layout: state.layout,
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      collapse,
      getProfile,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps);
