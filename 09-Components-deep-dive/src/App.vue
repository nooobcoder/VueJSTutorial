<template>
	<div>
		<the-header></the-header>
		<button @click="setSelectedComponent('active-goals')">
			Active Goals
		</button>
		<button @click="setSelectedComponent('manage-goals')">
			Manage Goals
		</button>
		<!-- Keep alive is necessary to store dynamic component state -->
		<!-- https://v3.vuejs.org/api/built-in-components.html#keep-alive -->
		<keep-alive>
			<component :is="selectedComponent"></component
		></keep-alive>
	</div>
</template>

<script>
	import TheHeader from "./components/layout/TheHeader.vue";
	import ActiveGoals from "./components/ActiveGoals.vue";
	import ManageGoals from "./components/ManageGoals.vue";

	export default {
		components: {
			"the-header": TheHeader,
			"active-goals": ActiveGoals,
			"manage-goals": ManageGoals,
		},
		data() {
			return {
				selectedComponent: "active-goals",
				activeUser: {
					name: "Ankur Paul",
					description: "Site owner and admin",
					role: "admin",
				},
			};
		},
		methods: {
			setSelectedComponent(cmp) {
				this.selectedComponent = cmp;
			},
		},
	};
</script>

<style>
	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>
