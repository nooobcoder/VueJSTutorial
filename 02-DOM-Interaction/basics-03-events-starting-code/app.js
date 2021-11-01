const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: null,
			confirmedName: "",
		};
	},
	methods: {
		setName() {
			this.name = event.target.value;
		},
		confirmInput() {
			this.confirmedName = this.name;
		},
		submitForm(event) {
			alert("Submitted");
		},
		add(num) {
			this.counter += num;
		},
		subtract(num) {
			this.counter -= num;
		},
	},
});

app.mount("#events");
