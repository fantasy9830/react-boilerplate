import React from 'react';
import PropTypes from 'prop-types';
import { Image, MobileLink } from './style';
import container from './container';

const MobileLogo = props => (
  <MobileLink
    to={props.to}
    key="logo"
    onClick={() => props.changeActive('home')}
  >
    <Image src={props.image} />
  </MobileLink>
);

MobileLogo.propTypes = {
  to: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default container(MobileLogo);
