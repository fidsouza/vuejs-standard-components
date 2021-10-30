import PostsService from './posts';
import AxiosHttpClient from './axios-client';

const httpClient = new AxiosHttpClient('https://jsonplaceholder.typicode.com');

export default {
  posts: PostsService(httpClient),
};
