import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { collapse } from '../redux/layout';
import { setProfile } from '../redux/user';

const mapStateToProps = state => ({
  layout: state.layout,
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      collapse,
      setProfile,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps);
