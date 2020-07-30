import qs from 'qs';
import { TokenStorage } from '../utils/auth';
import { message } from 'antd';

const connect = (path, query) =>
  new Promise((resolve, reject) => {
    query = qs.stringify({
      ...query,
      access_token: TokenStorage.getToken(),
    });

    const ws = new WebSocket(
      `${process.env.REACT_APP_WEBSOCKET_URL}${path}?${query}`,
    );

    ws.onopen = () => resolve(ws);
    ws.onerror = (err) => reject(err);
  });

const reconnect = async (path, query, retry = 3) => {
  try {
    return await connect(path, query);
  } catch (error) {
    if (--retry <= 0) {
      const target = error.target || error.srcElement;
      if (target && target.readyState === WebSocket.CLOSED) {
        message.error(
          `WebSocket connection is closed or couldn't be opened.`,
          5,
        );
      }

      throw error;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return await reconnect(path, query, retry);
    }
  }
};

export default reconnect;
