import styled from 'styled-components';
import { Layout } from 'antd';
import Icon from '@ant-design/icons';

export const Header = styled(Layout.Header)`
  height: ${props => props.height || '64px'} !important;
  padding: 0 !important;
  background: #fff !important;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
`;

export const MenuBar = styled(Icon)`
  font-size: 20px;
  height: ${props => props.height || '64px'} !important;
  cursor: pointer;
  transition: all 0.3s, padding 0s;
  padding: 22px 24px;
  vertical-align: unset !important;
  &:hover {
    background: #e6f7ff;
  }
  @media (max-width: 768px) {
    padding: 22px 12px;
  }
`;

export const Right = styled.div`
  float: right;
  height: 100%;
  overflow: hidden;
`;
