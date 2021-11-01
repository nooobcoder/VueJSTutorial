<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">Save Changes</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  data() {
    return { changesSaved: false };
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      // Redirecting to a path programmatically https://router.vuejs.org/guide/essentials/navigation.html
      this.$router.push('/teams');
      /* this.$router.forward();
      this.$router.back(); */
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UsersList Cmp before beforeRouteEnter');
    console.log(to, from);
    next();
  },
  saveChanges() {
    this.saveChanges = true;
  },
  // https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards
  beforeRouteLeave(to, from, next) {
    console.log('UsersList cmp beforeRouteLeave');
    console.log(to, from);

    if (this.changesSaved) next();
    else {
      const userWantsLeave = confirm('Are you sure to leave?');
      next(userWantsLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
