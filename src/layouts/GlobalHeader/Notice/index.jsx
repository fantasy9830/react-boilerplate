import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotice } from './../../../redux/layout';
import { useTranslation } from 'react-i18next';
import { BellOutlined } from '@ant-design/icons';
import { Notification } from './style';

import noticeImage from './images/notice.svg';
import messageImage from './images/message.svg';
import todoImage from './images/todo.svg';

const Notice = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.layout.notice);
  const [t] = useTranslation('layout');

  function handleItemClick(item, tabProps) {
    // console.log(item, tabProps);
  }

  function handleClear(tabTitle) {
    let type = '';
    if (tabTitle === t('notice.notice')) {
      type = 'notice';
    } else if (tabTitle === t('notice.message')) {
      type = 'message';
    } else if (tabTitle === t('notice.todo')) {
      type = 'todo';
    }

    dispatch(clearNotice(type));
  }

  return (
    <Notification
      bell={<BellOutlined style={{ fontSize: '20px' }} />}
      count={data.length}
      onItemClick={handleItemClick}
      onClear={handleClear}
      locale={{ emptyText: t('notice.emptyText'), clear: t('notice.clear') }}
      popupAlign={{ offset: [20, -16] }}
    >
      {/* 通知事項 */}
      <Notification.Tab
        list={data.filter(item => item.type === 'notice')}
        title={t('notice.notice')}
        emptyText={t('notice.noticeEmpty')}
        emptyImage={noticeImage}
      />

      {/* 訊息 */}
      <Notification.Tab
        list={data.filter(item => item.type === 'message')}
        title={t('notice.message')}
        emptyText={t('notice.messageEmpty')}
        emptyImage={messageImage}
      />

      {/* 待辦事項 */}
      <Notification.Tab
        list={data.filter(item => item.type === 'todo')}
        title={t('notice.todo')}
        emptyText={t('notice.todoEmpty')}
        emptyImage={todoImage}
      />
    </Notification>
  );
};

export default Notice;
