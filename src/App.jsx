import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { LocaleProvider } from 'antd';
import stores, { history } from './stores';
import zhTW from 'antd/lib/locale-provider/zh_TW';
import Routes from './Routes';

const App = () => (
  <Provider store={stores}>
    <LocaleProvider locale={zhTW}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </LocaleProvider>
  </Provider>
);

export default App;
