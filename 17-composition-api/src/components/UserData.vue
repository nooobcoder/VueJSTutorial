<template>
  <h2>{{ computed.userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject } from "vue";

export default {
  props: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  setup(props) {
    const userName = computed(() => `${props.firstName} ${props.lastName}`);

    const age = inject("userAge");

    return { computed: { userName }, age };
  },
};
</script>
