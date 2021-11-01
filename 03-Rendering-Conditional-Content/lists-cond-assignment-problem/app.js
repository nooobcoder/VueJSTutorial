const app = Vue.createApp({
	data() {
		return { enteredWord: null, tasks: [], showList: true };
	},
	methods: {
		addTask() {
			this.tasks.push(this.enteredWord);
			this.enteredWord = null;
		},
		buttonName() {
			return this.showList ? "Hide" : "Show";
		},
		toggleVisibility() {
			this.showList = !this.showList;
		},
	},
});
app.mount("#assignment");
