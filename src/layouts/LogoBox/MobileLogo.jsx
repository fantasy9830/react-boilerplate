import React from 'react';
import PropTypes from 'prop-types';
import { Image, MobileLink } from './style';

const MobileLogo = props => (
  <MobileLink to={props.to} key="logo">
    <Image src={props.image} />
  </MobileLink>
);

MobileLogo.propTypes = {
  to: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MobileLogo;
