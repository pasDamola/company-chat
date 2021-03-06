export default {
  isLoggedIn: (state) => !!state.token,
  authStatus: (state) => state.status,
  getChannels(state) {
    return state.channels;
  },
};
