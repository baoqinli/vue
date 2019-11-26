<template>
	<div><child @fatherMethod="fatherMethod"></child></div>
</template>

<script>
import child from './analysis';
export default {
	components: {
		child
	},
	methods: {
		fatherMethod() {
			console.log('测试');
		}
	}
};
</script>

<style></style>
