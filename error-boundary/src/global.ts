import Vue from 'vue';

function NewGlobalEvent(eventName: string) {
  const eventname = eventName || '';
  const name = `global-${eventname}-event`;
  const bus = new Vue();

  type genericReturn = ({ payload }: { payload: boolean }) => unknown;

  function generic(action: NonNullable<{ type: string; payload: boolean }>) {
    const actionName = action;
    bus.$emit(name, actionName);
  }
  function show() {
    const payload = true;
    generic({ type: 'SHOW', payload });
  }
  function hide() {
    const payload = false;
    generic({ type: 'HIDE', payload });
  }
  function onToogle(callback: genericReturn) {
    bus.$on(name, callback);
  }
  function off() {
    bus.$off(name);
  }

  return {
    show,
    hide,
    onToogle,
    off,
  };
}

export default {
  loading: NewGlobalEvent('loading'),
};
