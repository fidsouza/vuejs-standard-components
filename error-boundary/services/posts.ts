import { HttpGetClient } from './client';
import global from '../src/global';

export default (httpClient: HttpGetClient) => ({
  async getAll(): Promise<[]> {
    global.loading.show();
    const response = await httpClient.get({ url: '/posts' });
    global.loading.hide();
    return response;
  },
});
