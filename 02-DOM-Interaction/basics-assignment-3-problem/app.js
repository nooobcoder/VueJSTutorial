const App = Vue.createApp({
	data() {
		return { counter: 0, resultComment: "" };
	},
	watch: {
		counter() {
			this.resultComment =
				this.counter <= 37 ? "Not there yet!" : "Too Much!";
			console.log("Executing watcher");
			setTimeout(() => (this.counter = 0), 5000);
		},
	},
	methods: {
		incrementCounter(value) {
			this.counter += value;
		},
	},
});
App.mount("#assignment");
