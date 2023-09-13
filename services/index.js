import axios from 'axios';

const request = (method, url, token, data) => {
  return axios({
    method: method || 'GET',
    url,
    data: {
      ...data,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default request;
