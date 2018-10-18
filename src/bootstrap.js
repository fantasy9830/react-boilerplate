// cross-browser default styling of HTML elements
import 'sanitize.css/sanitize.css';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// 相關語系檔
import 'moment/locale/zh-tw';
import './locales';

library.add(fab, far, fas);
