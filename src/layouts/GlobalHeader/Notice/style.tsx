import styled from 'styled-components';
import { NoticeIcon } from 'ant-design-pro';

export const Notification: any = styled(NoticeIcon)`
  cursor: pointer;
  padding: 0 12px;
  display: inline-block;
  transition: all 0.3s;
  height: 100%;
  &:hover {
    background: #e6f7ff;
  }
`;
