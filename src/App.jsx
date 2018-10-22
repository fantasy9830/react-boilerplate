import React from 'react';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import stores from './stores';
import zhTW from 'antd/lib/locale-provider/zh_TW';
import Routes from './Routes';

const App = () => (
  <Provider store={stores}>
    <LocaleProvider locale={zhTW}>
      <Routes />
    </LocaleProvider>
  </Provider>
);

export default App;
