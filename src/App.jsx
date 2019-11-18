import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import stores from './stores';
import zhTW from 'antd/lib/locale-provider/zh_TW';
import Router from './Router';

const App = () => (
  <Provider store={stores}>
    <ConfigProvider locale={zhTW}>
      <Router />
    </ConfigProvider>
  </Provider>
);

export default App;
