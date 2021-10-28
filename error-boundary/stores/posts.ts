import Vue from 'vue';

interface currentState {
  readonly posts: any[];
  readonly isLoading: boolean;
  readonly hasError: boolean;
}

const stateStorage = Vue.observable({
  posts: [],
  isLoading: false,
  hasError: false,
});

export const state: Readonly<currentState> = stateStorage;

export function setPosts(posts: []): void {
  stateStorage.posts = posts;
}

export function setLoading(loading: boolean): void {
  stateStorage.isLoading = loading;
}

export function setError(error: boolean): void {
  stateStorage.hasError = error;
}
