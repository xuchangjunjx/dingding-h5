import request from "./index";
import * as dd from "dingtalk-jsapi"; // 此方式为整体加载，也可按需进行加载

export function getAuth() {
	return new Promise(resolve => {
		dd.ready(function () {
			dd.runtime.permission.requestAuthCode({
				corpId: process.env.VUE_APP_APP_CORPID,
				onSuccess: function (info) {
					resolve(info.code);
				}
			});
		});
	});
}
export async function getToken() {
	let res = await request.get("/dingapi/gettoken", {
		params: {
			appkey: process.env.VUE_APP_APP_KEY,
			appsecret: process.env.VUE_APP_APP_SECRET
		}
	});
	return res.data.access_token;
}
