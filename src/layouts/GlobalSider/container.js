import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeActive, setOpenKeys, clearOpenKeys } from '../../redux/layout';

const mapStateToProps = state => ({
  current: state.layout.current,
  openKeys: state.layout.openKeys,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeActive,
      setOpenKeys,
      clearOpenKeys,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps);
