<template>
	<div id="app">
		<van-tabbar v-model="active" route>
			<van-tabbar-item icon="volume-o" replace to="/">我的待办</van-tabbar-item>
			<van-tabbar-item icon="todo-list-o" replace to="/about"
				>我的已办</van-tabbar-item
			>
		</van-tabbar>
		<router-view />
	</div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
	data() {
		return {
			active: 0
		};
	},
	methods: {},
	mounted() {}
};
</script>

<style>
html,
body {
	padding: 0;
	margin: 0;
	background: #f7f8fa;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
