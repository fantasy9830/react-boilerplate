import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Top = styled.div`
  text-align: center;
`;

export const Header = styled.div`
  height: 44px;
  line-height: 44px;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled.img`
  height: 44px;
  vertical-align: top;
  margin-right: 16px;
`;

export const Title = styled.span`
  font-size: 33px;
  color: rgba(0, 0, 0, 0.85);
  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: relative;
  top: 2px;
`;

export const Desc = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 12px;
  margin-bottom: 40px;
`;

export const Main = styled.div`
  width: 368px;
  margin: 0 auto;
  @media screen and (max-width: 576px) {
    width: 95%;
  }
`;
