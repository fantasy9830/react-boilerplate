import 'sanitize.css/sanitize.css';
import 'ant-design-pro/dist/ant-design-pro.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { LocaleProvider } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// 相關語系檔
import 'moment/locale/zh-tw';
import zhTW from 'antd/lib/locale-provider/zh_TW';
import './locales';

import stores, { history } from './stores';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

library.add(fab, far, fas);

const Index = () => (
  <Provider store={stores}>
    <LocaleProvider locale={zhTW}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </LocaleProvider>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
