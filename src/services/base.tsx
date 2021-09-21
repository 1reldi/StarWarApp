import { Alert } from 'react-native';
import axios from 'axios';

const getRequest = async () => {
  const request = axios.create({
    baseURL: '',
  });

  request.interceptors.response.use(
    (resp) => resp.data,
    (error) => {
      if (error.message && error.message === 'Network Error') {
        Alert.alert(
          'Network Unavailable',
          'Please check your network connection and try again.',
          [],
          { cancelable: false },
        );
      }

      return Promise.reject(error);
    },
  );

  return request;
};

const post = async (url, data) => {
  const request = await getRequest();

  return new Promise((resolve, reject) => {
    request({ url, method: 'post', data }).then(resolve).catch(reject);
  });
};

const get = async (url, params = {}) => {
  const request = await getRequest();

  return new Promise((resolve, reject) => {
    request({ url, method: 'get', params }).then(resolve).catch(reject);
  });
};

const put = async (url, data) => {
  const request = await getRequest();

  return new Promise((resolve, reject) => {
    request({ url, method: 'put', data }).then(resolve).catch(reject);
  });
};

const deleteReq = async (url, data) => {
  const request = await getRequest();

  return new Promise((resolve, reject) => {
    request({ url, method: 'delete', data }).then(resolve).catch(reject);
  });
};

export default { post, get, put, delete: deleteReq };
