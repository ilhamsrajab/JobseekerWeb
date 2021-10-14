export default {
  userId(state) {
    return state.id;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  }
};