const app = Vue.createApp({
	data() {
		return {
			name: "Ankur Paul",
			age: 19,
			imageURL:
				"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85",
		};
	},
	methods: {
		getIncrementedAge() {
			return this.age + 5;
		},
		getRandomNumber() {
			return Math.round(Math.random());
		},
	},
});
app.mount("#assignment");
