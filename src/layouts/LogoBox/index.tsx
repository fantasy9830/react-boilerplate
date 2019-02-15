import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Title } from './style';
import container from './container';

export interface IProps {
  image: string;
  title: string;
  changeActive(current: string): void;
  clearOpenKeys(): void;
  onClick?(): void;
}

const LogoBox = ({
  image,
  title,
  changeActive,
  clearOpenKeys,
  ...passThroughProps
}: IProps) => (
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

export default container(LogoBox);
