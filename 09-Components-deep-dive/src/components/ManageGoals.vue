<template>
	<h2>Manage Goals</h2>

	<form action="submit">
		<input type="text" ref="goal" />
		<button type="submit" @click.prevent="setGoal">Set Goal</button>
		<teleport to="body">
			<error-alert v-show="inputIsInvalid"
				><h2>Input is invalid!</h2>
				<p>Please input atleast a character!</p>
				<button type="submit" @click.prevent="confirmError">
					I Acknowledge
				</button>
			</error-alert>
		</teleport>
	</form>
</template>

<script>
	import ErrorAlert from "./ErrorAlert.vue";

	export default {
		components: { "error-alert": ErrorAlert },
		data() {
			return { inputIsInvalid: false };
		},
		methods: {
			confirmError() {
				this.inputIsInvalid = false;
			},
			setGoal() {
				const enteredValue = this.$refs.goal.value;
				if (enteredValue === "") {
					this.inputIsInvalid = true;
				}
			},
		},
	};
</script>
