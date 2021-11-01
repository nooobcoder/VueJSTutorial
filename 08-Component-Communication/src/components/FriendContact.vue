<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
		<button @click="toggleDetails">
			{{ detailsAreVisible ? "Hide" : "Show" }} Details
		</button>
		<button @click="toggleFavorite">Toggle Favorite</button>
		<ul v-if="detailsAreVisible">
			<li>
				<strong>Phone:</strong>
				{{ phoneNumber }}
			</li>
			<li>
				<strong>Email:</strong>
				{{ emailAddress }}
			</li>
		</ul>
		<button @click="$emit('delete', id)">Delete Friend</button>
	</li>
</template>

<script>
	export default {
		// props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
		props: {
			id: { type: String, required: true },
			name: {
				type: String,
				required: true,
			},
			phoneNumber: { type: String, required: true },
			emailAddress: { type: String, required: true },
			isFavorite: {
				type: Boolean,
				required: false,
				default: false,
			},
		},
		emits: {
			"toggle-favorite": (id) => {
				// Validation logic here
				if (id) {
					return true;
				} else {
					console.warn("Id is missing");
					return false;
				}
			},
			delete: (id) => {
				// Validation logic here
				if (id) {
					return true;
				} else {
					console.warn("Id is missing");
					return false;
				}
			},
		},
		data() {
			return {
				detailsAreVisible: false,
				friend: {
					id: "manuel",
					name: "Manuel Lorenz",
					phone: "0123 45678 90",
					email: "manuel@localhost.com",
				},
			};
		},
		methods: {
			toggleDetails() {
				this.detailsAreVisible = !this.detailsAreVisible;
			},
			toggleFavorite() {
				this.$emit("toggle-favorite", this.id);
			},
		},
	};
</script>
