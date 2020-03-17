import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Image, Title } from './style';
import { changeActive, clearOpenKeys } from './../../redux/layout';

const LogoBox = ({ image, title, ...passThroughProps }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Link
        {...passThroughProps}
        to="/"
        onClick={() => {
          if (passThroughProps.onClick) {
            passThroughProps.onClick();
          }

          dispatch(clearOpenKeys());
          dispatch(changeActive('home'));
        }}
      >
        <Image src={image} />
        <Title>{title}</Title>
      </Link>
    </Container>
  );
};

LogoBox.prototype = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default LogoBox;
