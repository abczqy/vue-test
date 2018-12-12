export const mutationsMsg = (state, payload) => {
  state.msg = payload.msg;
};

export const changeData = (state, payload) => {
  state.data[payload.data.name] = payload.data.value
};
