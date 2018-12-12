export const changeMsg = ({commit}, value) => {
  commit({
    type: 'mutationsMsg',     //对应mutation.js中的mutationsMsg方法
    msg: value
  });
};

export const changeData = ({commit}, obj) => {
  commit({
    type: 'changeData',
    data: obj
  })
};
