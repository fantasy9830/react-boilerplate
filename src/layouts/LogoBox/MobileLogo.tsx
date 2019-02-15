import React from 'react';
import { Image, MobileLink } from './style';
import container from './container';

export interface IProps {
  image: string;
  changeActive(current: string): void;
  clearOpenKeys(): void;
}

const MobileLogo = (props: IProps) => (
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

export default container(MobileLogo);
