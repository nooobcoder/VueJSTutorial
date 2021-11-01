const app = Vue.createApp({
	data() {
		return {
			className: "",
			visible: true,
			hidden: false,
			inputBackgroundColor: 'salmon',
		};
	},
	watch: {
		className(newValue, oldValue) {
			this.className = newValue;
			console.log(this.className);
		},
	},
	methods: {
		toggleVisibility() {
			this.visible = !this.visible;
			this.hidden = !this.visible;
			console.log(this.visible);
			return this.visible;
		},
	},
});
app.mount("#assignment");
