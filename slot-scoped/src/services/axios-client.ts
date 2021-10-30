import axios, { AxiosInstance } from 'axios';
import { HttpGetClient } from './client';

type Input = HttpGetClient.Input;

export default class AxiosHttpClient implements HttpGetClient {
  private readonly _axios: AxiosInstance;

  constructor(baseUrl: string) {
    this._axios = axios.create({ baseURL: baseUrl });
  }

  async get({ url, params }: Input): Promise<any> {
    const result = await this._axios.get(url, { params });
    return result.data;
  }
}
