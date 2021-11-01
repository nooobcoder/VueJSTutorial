export default {
  addCoach(state, payload) {
    // 'payload' is the sanitized data from it's caller action
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
