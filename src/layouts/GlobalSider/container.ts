import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './../../redux/layout';

const mapStateToProps = (state: IStoreState) => ({
  current: state.layout.current,
  openKeys: state.layout.openKeys,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch) =>
  bindActionCreators(
    {
      changeActive: actions.changeActive,
      setOpenKeys: actions.setOpenKeys,
      clearOpenKeys: actions.clearOpenKeys,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
