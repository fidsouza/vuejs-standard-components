import Vue from 'vue';

interface currentState {
  currentState: {
    readonly id: string;
    readonly nome: string;
    readonly email: string;
  };
}

const stateStorage = Vue.observable({
  currentState: {
    id: '',
    nome: '',
    email: '',
  },
});

export const state: Readonly<currentState> = stateStorage;
export function setEmail(email: string): void {
  stateStorage.currentState.email = email;
}
