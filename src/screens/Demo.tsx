import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const Demo: React.FC<RouteComponentProps<any>> = ({ location }) => (
  <div>{location.pathname}</div>
);

export default Demo;
