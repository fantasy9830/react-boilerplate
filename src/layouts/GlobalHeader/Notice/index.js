import React from 'react';
import container from './container';
import { withNamespaces } from 'react-i18next';
import { NoticeIcon } from './style';

import noticeImage from './../../../images/notice.svg';
import messageImage from './../../../images/message.svg';
import todoImage from './../../../images/todo.svg';

class Notice extends React.Component {
  handleItemClick = (item, tabProps) => {
    // console.log(item, tabProps);
  };

  handleClear = tabTitle => {
    let type = '';
    if (tabTitle === this.props.t('notice.notice')) {
      type = 'notice';
    } else if (tabTitle === this.props.t('notice.message')) {
      type = 'message';
    } else if (tabTitle === this.props.t('notice.todo')) {
      type = 'todo';
    }

    this.props.clearNotice(type);
  };

  render() {
    const { t } = this.props;
    const noticeData = this.props.data;

    return (
      <NoticeIcon
        count={this.props.data.length}
        onItemClick={this.handleItemClick}
        onClear={this.handleClear}
        locale={{ emptyText: t('notice.emptyText'), clear: t('notice.clear') }}
        popupAlign={{ offset: [20, -16] }}
      >
        {/* 通知事項 */}
        <NoticeIcon.Tab
          list={noticeData['notice']}
          title={t('notice.notice')}
          emptyText={t('notice.noticeEmpty')}
          emptyImage={noticeImage}
        />

        {/* 訊息 */}
        <NoticeIcon.Tab
          list={noticeData['message']}
          title={t('notice.message')}
          emptyText={t('notice.messageEmpty')}
          emptyImage={messageImage}
        />

        {/* 待辦事項 */}
        <NoticeIcon.Tab
          list={noticeData['todo']}
          title={t('notice.todo')}
          emptyText={t('notice.todoEmpty')}
          emptyImage={todoImage}
        />
      </NoticeIcon>
    );
  }
}

export default withNamespaces('layout')(container(Notice));
