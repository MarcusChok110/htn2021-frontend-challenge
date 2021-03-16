export const userActions = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

function userReducer(state: boolean, action: string) {
  switch (action) {
    case userActions.LOGIN:
      return true;
    case userActions.LOGOUT:
      return false;
    default:
      return state;
  }
}

export default userReducer;
