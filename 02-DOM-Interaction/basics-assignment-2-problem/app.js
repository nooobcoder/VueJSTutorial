const app = Vue.createApp({
	data() {
		return {
			inputValue: null,
		};
	},
	methods: {
		showAlert() {
			alert("This is an alert");
		},
		registerInput: function (e) {
			this.inputValue = e.target.value;
		},
	},
}).mount("#assignment");
