export default {
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  }
};