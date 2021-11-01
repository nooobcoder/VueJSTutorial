import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const coaches = [
  {
    id: "c1",
    firstName: "Maximilian",
    lastName: "Schwarzmüller",
    areas: ["frontend", "backend", "career"],
    description:
      "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
    hourlyRate: 30,
  },
  {
    id: "c2",
    firstName: "Julie",
    lastName: "Jones",
    areas: ["frontend", "career"],
    description:
      "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
    hourlyRate: 30,
  },
  {
    id: "c3",
    firstName: "Ankur",
    lastName: "Paul",
    areas: ["frontend", "career", "devops"],
    description:
      "Researching, designing, implementing, and managing software programs. Testing and evaluating new programs.",
    hourlyRate: 50,
  },
];

export default {
  namespaced: true,
  state() {
    return { lastFetch: null, userIsCoach: false, coaches };
  },
  mutations,
  actions,
  getters,
};
