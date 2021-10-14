import { HttpGetClient } from './client';

export default (httpClient: HttpGetClient) => ({
  getAll() {
    return httpClient.get({ url: '/posts' });
  },
});
