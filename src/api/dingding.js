import request from "./index";
import * as dd from "dingtalk-jsapi"; // 此方式为整体加载，也可按需进行加载
// 获取授权码
export function getAuth() {
	return new Promise(resolve => {
		dd.ready(function () {
			dd.runtime.permission.requestAuthCode({
				corpId: process.env.VUE_APP_APP_CORPID,
				onSuccess: function (info) {
					console.log("info", info);
					resolve(info.code);
				}
			});
		});
	});
}
// 获取token
export async function getToken() {
	let res = await request.get("/dingapi/gettoken", {
		params: {
			appkey: process.env.VUE_APP_APP_KEY,
			appsecret: process.env.VUE_APP_APP_SECRET
		}
	});
	return res.data.access_token;
}

export async function getUserId() {
	let code = await getAuth();
	let token = await getToken();
	let res = await request.post("/dingding/getUserId", {
		code: code,
		token: token
	});
	console.log("res", res.data.rtnData);
	return res.data.rtnData;
}

// 获取用户详细的信息 需要传用户ID
// 用户ID需要后端接口返回
export async function getUserInfo() {
	let token = await getToken();
	let res = await request.post("/dingding/getUserInfo", {
		userid: "manager116",
		token: token
	});
	console.log("res", res.data.rtnData);
	return res.data.rtnData;
}
