export default {
  getRequests(state, _getters, _rootState, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(_state, getters) {
    return getters?.getRequests.length > 0;
  },
};
