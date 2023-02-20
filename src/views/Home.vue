<template>
	<div class="home">
		<van-cell-group title="分组1">
			<van-cell title="单元格" value="1小时前" is-link>
				<template #title>
					<span class="custom-title">单元格</span>
					<van-tag type="warning">逾期</van-tag>
				</template>
			</van-cell>
			<van-cell title="单元格" value="1小时前" is-link>
				<template #title>
					<span class="custom-title">单元格</span>
					<van-tag type="danger">紧急</van-tag>
				</template>
				<!-- <template #icon>
					<van-icon name="star-o"  class="my-icon" />
				</template> -->
				<!-- <template #right-icon>
					<van-icon name="search" class="right-icon my-icon search-icon" />
				</template> -->
			</van-cell>
		</van-cell-group>
		<van-cell-group title="分组2">
			<van-cell title="单元格" value="1小时前" is-link />
			<van-cell title="单元格" value="1小时前" is-link />
		</van-cell-group>
	</div>
</template>

<script>
// import Vue from "vue";
// import { Cell, CellGroup, Tag } from "vant";

// import Button from "../components/basic-components/button/index.vue";
// import DropdownMenu from "../components/basic-components/dropdownMenu/index.vue";
// import Popover from "../components/basic-components/popover/index.vue";
// import BizCalendarChooseDateTime from "../components/jsapi/biz.calendar.chooseDateTime/index.vue";
// import BizContactComplexPicker from "../components/jsapi/biz.contact.complexPicker/index.vue";

// Vue.use(CellGroup);

// Vue.use(Cell);
// Vue.use(Tag);

// Vue.use(ActionSheet);

export default {
	name: "Home",
	components: {
		// Button,
		// DropdownMenu,
		// Popover,
		// BizCalendarChooseDateTime,
		// BizContactComplexPicker
	},
	methods: {
		showActionSheet(title, componentName) {
			this.show = true;
			this.currentActionSheetTitle = title;
			this.currentActionSheetComponent = componentName;
		}
	},
	data() {
		return {
			active: 0,
			show: false,
			currentActionSheetTitle: "",
			currentActionSheetComponent: ""
			// basicComponents: [
			// 	{
			// 		title: "按钮",
			// 		componentName: "Button",
			// 		previewUrl:
			// 			"https://img.alicdn.com/imgextra/i1/O1CN01rGcU9X1by9xPcJjuK_!!6000000003533-2-tps-612-292.png"
			// 	},
			// 	{
			// 		title: "下拉菜单",
			// 		componentName: "DropdownMenu",
			// 		previewUrl:
			// 			"https://img.alicdn.com/imgextra/i1/O1CN015SSxf71IWFB5imj3p_!!6000000000900-2-tps-612-292.png"
			// 	},
			// 	{
			// 		title: "气泡弹出框",
			// 		componentName: "Popover",
			// 		previewUrl:
			// 			"https://gw.alicdn.com/imgextra/i1/O1CN01rECNlj1TSXiAlsxOl_!!6000000002381-2-tps-612-292.png"
			// 	}
			// ],
			// jsapi: [
			// 	{
			// 		header: "UI-dd",
			// 		items: [
			// 			{
			// 				name: "biz.calendar.chooseDateTime",
			// 				key: "BizCalendarChooseDateTime",
			// 				desc: "选择某时间"
			// 			}
			// 		]
			// 	},
			// 	{
			// 		header: "Contact",
			// 		items: [
			// 			{
			// 				name: "biz.contact.complexPicker",
			// 				key: "BizContactComplexPicker",
			// 				desc: "选择部门和人"
			// 			}
			// 		]
			// 	}
			// ]
		};
	}
};
</script>

<style>
.content {
	padding: 16px 16px 160px;
}
.custom-title {
	margin-right: 4px;
}
.my-icon {
	margin: auto;
}
.right-icon {
	margin-left: 5px;
}
</style>
