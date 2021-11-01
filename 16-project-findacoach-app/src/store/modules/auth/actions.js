const apiKey = `AIzaSyC5pm26fSILOn4jivZje6OuP9o64ylm4A0`;
let timer;

export default {
  // API Docs: https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
  async login(ctx, { email, password }) {
    await ctx.dispatch("auth", { mode: "login", email, password });
  },
  async signup(ctx, { email, password }) {
    await ctx.dispatch("auth", { mode: "signup", email, password });
  },
  async auth(ctx, { authMode, email, password }) {
    let AUTH_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    if (authMode === "signup")
      AUTH_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

    const response = await fetch(AUTH_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    });

    // responseData = {idToken, expiresIn, localId}
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || "Failed to authenticate");
    }

    let { idToken, expiresIn, localId } = responseData;
    expiresIn *= 1000;

    // Implement: Auto login by storing the received idToken in browser localstorage
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem("authToken", idToken);
    localStorage.setItem("userId", localId);
    localStorage.setItem("expirationDate", expirationDate);

    timer = setTimeout(() => {
      ctx.dispatch("autoLogout");
    }, expiresIn);

    ctx.commit("setUser", {
      token: idToken,
      userId: localId,
    });
  },
  tryAutoLogin(ctx) {
    // Fetch the "authToken" from the browser localStorage
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const expirationDate = localStorage.getItem("expirationDate");

    const expiresIn = +expirationDate - new Date().getTime(); // in ms

    if (expiresIn < 0) {
      return; // Do not continue further
    }

    timer = setTimeout(() => {
      ctx.dispatch("autoLogout");
    }, expiresIn);

    if (token && userId) ctx.commit("setUser", { token, userId });
  },
  logout(ctx) {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationDate");

    ctx.commit("setUser", { token: null, userId: null });
    clearTimeout(timer);
    this.$router.replace("/coaches");
  },
  autoLogout(ctx) {
    ctx.dispatch("logout");
    ctx.commit("setAutoLogout");
  },
};
