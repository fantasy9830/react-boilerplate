import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clearNotice } from '../../../redux/layout';

const mapStateToProps = state => ({ data: state.layout.notice });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clearNotice,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps);
