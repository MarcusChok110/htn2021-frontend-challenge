export const USER_ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

function userReducer(state: boolean, action: string) {
  switch (action) {
    case USER_ACTIONS.LOGIN:
      return true;
    case USER_ACTIONS.LOGOUT:
      return false;
    default:
      return state;
  }
}

export default userReducer;
