const firebase_url = `https://find-a-coach-app-3fa3b-default-rtdb.asia-southeast1.firebasedatabase.app/`;

export default {
  async contactCoach(ctx, payload) {
    const newRequest = {
      userEmail: payload.emailAddress,
      message: payload.message,
    };
    const response = await fetch(
      `${firebase_url}requests/${payload.coachId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Failed to send request");
    }
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    ctx.commit("addRequest", newRequest);
  },
  async fetchRequests(ctx) {
    const coachId = ctx.rootGetters.userId;
    const token = ctx.rootGetters.token;

    const response = await fetch(
      `${firebase_url}requests/${coachId}.json?auth=${token}`
    );
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Failed to fetch request");
    }

    const requests = [];
    for (const key in responseData) {
      requests.push({
        id: key,
        coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      });
    }
    ctx.commit("setRequests", requests);
  },
};
