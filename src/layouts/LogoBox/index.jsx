import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Image, Title } from './style';
import container from './container';

const LogoBox = ({
  image,
  title,
  changeActive,
  clearOpenKeys,
  ...passThroughProps
}) => (
  <Container>
    <Link
      {...passThroughProps}
      to="/"
      onClick={() => {
        if (passThroughProps.onClick) {
          passThroughProps.onClick();
        }

        clearOpenKeys();
        changeActive('home');
      }}
    >
      <Image src={image} />
      <Title>{title}</Title>
    </Link>
  </Container>
);

LogoBox.prototype = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  changeActive: PropTypes.func.isRequired,
  clearOpenKeys: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

export default container(LogoBox);
