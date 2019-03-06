import React from 'react';
import { Icon } from 'antd';
import { Footer } from './style';

const GlobalFooter = () => {
  return (
    <Footer tagName="footer">
      Copyright <Icon type="copyright" /> Ricky. All rights reserved
    </Footer>
  );
};

export default GlobalFooter;
