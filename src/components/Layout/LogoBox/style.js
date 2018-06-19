import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 64px;
  position: relative;
  line-height: 64px;
  padding-left: 24px;
  transition: all 0.3s;
  background: #002140;
  overflow: hidden;
`;

export const MobileLink = styled(Link)`
  height: 64px;
  line-height: 58px;
  vertical-align: top;
  display: inline-block;
  padding: 0 0 0 24px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding-right: 12px;
    position: relative;
  }
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
  display: inline-block;
  vertical-align: middle;
`;

export const Title = styled.h1`
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  font-size: 20px;
  margin-left: 12px;
  font-family: 'Microsoft JhengHei', 'Myriad Pro', 'Helvetica Neue', Arial,
    Helvetica, sans-serif;
`;
