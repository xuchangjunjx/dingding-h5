<template>
	<div class="pipielines">用户信息： {{ userInfo }}</div>
</template>
<script>
export default {
	data() {
		return {
			userInfo: ""
		};
	},
	mounted() {
		this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
	}
};
</script>
