const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: "1",
					name: "Ankur Paul",
					phone: "1656578965",
					email: "abcd@example.com",
				},
				{
					id: "2",
					name: "Jose Santiago",
					phone: "5213568",
					email: "jose@medium.com",
				},
			],
		};
	},
});
// First param is an identifier to uniquely identify the component in the app.
app.component("friend-contact", {
	template: `<li>
					<h2>{{ friend.name }}</h2>
					<button>Show Details</button>
					<ul>
						<li><strong>Phone:</strong> {{ friend.phone }}</li>
						<li><strong>Email:</strong> {{ friend.email }}</li>
					</ul>
				</li>`,
	data() {
		return {
			detailsAreVisible: false.valueOf,
			friend: {
				id: "2",
				name: "Jose Santiago",
				phone: "5213568",
				email: "jose@medium.com",
			},
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
});
app.mount("#app");
