import React from 'react';
import container from './container';
import { useTranslation } from 'react-i18next';
import { Icon } from 'antd';
import { Notification } from './style';

import noticeImage from './images/notice.svg';
import messageImage from './images/message.svg';
import todoImage from './images/todo.svg';

export interface IProps {
  data: any[];
  clearNotice(noticeType: string): void;
}

const Notice = ({ data, clearNotice }: IProps) => {
  const [t] = useTranslation('layout');

  function handleItemClick(item: any, tabProps: any) {
    // console.log(item, tabProps);
  }

  function handleClear(tabTitle: string) {
    let type = '';
    if (tabTitle === t('notice.notice')) {
      type = 'notice';
    } else if (tabTitle === t('notice.message')) {
      type = 'message';
    } else if (tabTitle === t('notice.todo')) {
      type = 'todo';
    }

    clearNotice(type);
  }

  return (
    <Notification
      bell={<Icon type="bell" style={{ fontSize: '20px' }} />}
      count={data.length}
      onItemClick={handleItemClick}
      onClear={handleClear}
      locale={{ emptyText: t('notice.emptyText'), clear: t('notice.clear') }}
      popupAlign={{ offset: [20, -16] }}
    >
      {/* 通知事項 */}
      <Notification.Tab
        list={data.filter((item: any) => item.type === 'notice')}
        title={t('notice.notice')}
        emptyText={t('notice.noticeEmpty')}
        emptyImage={noticeImage}
      />

      {/* 訊息 */}
      <Notification.Tab
        list={data.filter((item: any) => item.type === 'message')}
        title={t('notice.message')}
        emptyText={t('notice.messageEmpty')}
        emptyImage={messageImage}
      />

      {/* 待辦事項 */}
      <Notification.Tab
        list={data.filter((item: any) => item.type === 'todo')}
        title={t('notice.todo')}
        emptyText={t('notice.todoEmpty')}
        emptyImage={todoImage}
      />
    </Notification>
  );
};

export default container(Notice);
