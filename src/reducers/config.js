export function config(
  state = {
    isAuthen: false,
    userInfo: {},
    objDuAn: { MaDA: 0, TenDA: "TẤT CẢ DỰ ÁN" },
  },
  action
) {
  switch (action.type) {
    case "SET_CONFIG":
      return Object.assign({}, state, {
        ...action.config,
      });
    default:
      return state;
  }
}
