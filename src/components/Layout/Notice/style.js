import styled from 'styled-components';
import Notice from 'ant-design-pro/lib/NoticeIcon';

export const NoticeIcon = styled(Notice)`
  cursor: pointer;
  padding: 0 12px;
  display: inline-block;
  transition: all 0.3s;
  height: 100%;
  &:hover {
    background: #e6f7ff;
  }
`;
