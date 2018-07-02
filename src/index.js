import 'sanitize.css/sanitize.css';
import 'ant-design-pro/dist/ant-design-pro.css'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';
import { LocaleProvider } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// 相關語系檔
import zhTW from 'antd/lib/locale-provider/zh_TW';
import 'moment/locale/zh-tw';

import locales from './locales';
import stores, { history } from './stores';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// locales.changeLanguage('zh-TW');
library.add(fab, far, fas);

const Index = () => (
  <Provider store={stores}>
    <I18nextProvider i18n={locales}>
      <LocaleProvider locale={zhTW}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LocaleProvider>
    </I18nextProvider>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
