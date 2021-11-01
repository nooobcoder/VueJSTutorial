<template>
  <base-card>
    <base-button
      @click.prevent="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click.prevent="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive> <component :is="selectedTab"></component></keep-alive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    "stored-resources": StoredResources,
    "add-resource": AddResource
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official guide",
          title: "Official VueJS Guide",
          description: "The Official guide for VueJS",
          link: "https://v3.vuejs.org/guide"
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to Google",
          link: "https://google.co.in"
        }
      ]
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      // Adding the new resource at index 0 of the resources array in 'data'
      this.storedResources.unshift({
        id: new Date().toISOString(),
        title,
        description,
        link: url
      });
      this.selectedTab = "stored-resources";
    },
    removeResource(resourceId) {
      const resourceIndex = this.storedResources.find(
        res => res.id === resourceId
      );
      this.storedResources.splice(resourceIndex, 1);
    }
  }
};
</script>
