import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Image, Title } from './style';
import container from './container';

const LogoBox = ({ image, title, changeActive, clearOpenKeys, ...passThroughProps }) => (
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

LogoBox.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default container(LogoBox);
