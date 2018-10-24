import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Image, Title } from './style';
import container from './container';

const LogoBox = ({ image, title, changeActive, ...passThroughProps }) => (
  <Container>
    <Link
      {...passThroughProps}
      onClick={() => {
        passThroughProps.onClick();
        changeActive('home');
      }}
    >
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

export default container(LogoBox);
