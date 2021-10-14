import AxiosHttpClient from './axios-client';

export default (httpClient: AxiosHttpClient) => ({
  getAll() {
    return httpClient.get({ url: '/posts' });
  },
});
