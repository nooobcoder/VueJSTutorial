const firebase_url = `https://find-a-coach-app-3fa3b-default-rtdb.asia-southeast1.firebasedatabase.app/`;
export default {
  async addCoach(ctx, { first, last, desc, rate, areas }) {
    // Reformatting the key names to match the model
    const userId = ctx.rootGetters.userId;
    const coachData = {
      firstName: first,
      lastName: last,
      description: desc,
      hourlyRate: rate,
      areas,
    };

    const token = ctx.getters.token;

    const response = await fetch(
      `${firebase_url}coaches/${userId}.json?auth=${token}`,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Failed to fetch");
    }

    ctx.commit("addCoach", { ...coachData, id: userId });
  },
  async loadCoaches(ctx, { forceRefresh }) {
    // Use the cached datd
    if (!forceRefresh && !ctx.getters.shouldUpdate) return;

    const response = await (await fetch(`${firebase_url}coaches.json`)).json();
    const coaches = [];
    for (const key in response) {
      const coach = {
        id: key,
        firstName: response[key].firstName,
        lastName: response[key].lastName,
        description: response[key].description,
        hourlyRate: response[key].hourlyRate,
        areas: response[key].areas,
      };
      coaches.push(coach);
    }
    ctx.commit("setCoaches", coaches);
    ctx.commit("setFetchTimestamp");
  },
};
