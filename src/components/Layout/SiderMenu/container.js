import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './../../../redux/layout';

const mapStateToProps = state => ({
  current: state.layout.sider.current,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeActive: actions.changeActive,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);

