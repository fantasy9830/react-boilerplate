import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Image, MobileLink } from './style';
import { changeActive, clearOpenKeys } from './../../redux/layout';

const MobileLogo = props => {
  const dispatch = useDispatch();

  return (
    <MobileLink
      to="/"
      key="logo"
      onClick={() => {
        dispatch(clearOpenKeys());
        dispatch(changeActive('home'));
      }}
    >
      <Image src={props.image} />
    </MobileLink>
  );
};

MobileLogo.prototype = {
  image: PropTypes.string.isRequired,
};

export default MobileLogo;
