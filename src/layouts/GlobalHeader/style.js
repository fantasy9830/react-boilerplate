import styled from 'styled-components';
import { Layout, Icon } from 'antd';

export const Header = styled(Layout.Header)`
  padding: 0 12px 0 0 !important;
  position: relative;
  background: #fff !important;
`;

export const MenuBar = styled(Icon)`
  font-size: 20px;
  line-height: 64px;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0px 24px;
  &:hover {
    background: #e6f7ff;
  }
  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

export const Right = styled.div`
  float: right;
  height: 100%;
`;
