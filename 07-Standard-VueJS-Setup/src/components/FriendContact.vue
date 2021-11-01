<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button>Show Details</button>
    <ul v-show="detailsAreVisible">
      <li>
        Phone: <strong>{{ friend.phone }}</strong>
      </li>
      <li>
        Email: <strong>{{ friend.email }}</strong>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "ankur",
        name: "Ankur Paul",
        phone: "462685656",
        email: "abcd@example.com"
      }
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
};
</script>
