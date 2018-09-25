import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Image, Title } from './style';

const LogoBox = ({ image, title, ...passThroughProps }) => (
  <Container>
    <Link {...passThroughProps}>
      <Image src={image} />
      <Title>{title}</Title>
    </Link>
  </Container>
);

LogoBox.propTypes = {
  to: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

export default LogoBox;
