import React from 'react';
import PropTypes from 'prop-types';
import { Image, MobileLink } from './style';
import container from './container';

const MobileLogo = props => (
  <MobileLink
    to="/"
    key="logo"
    onClick={() => {
      props.clearOpenKeys();
      props.changeActive('home');
    }}
  >
    <Image src={props.image} />
  </MobileLink>
);

MobileLogo.propTypes = {
  image: PropTypes.string.isRequired,
};

export default container(MobileLogo);
