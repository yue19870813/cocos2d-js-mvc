/**
 * 游戏配置类
 */
var common = common || {};	//公共类

common.GameConfig = {
		Debug:true,
		isRuntime:false,
		Log_tag:"MAP",
		TESE_UID:"TUIETUI-23423-adf123qqq",	// 本地测试时使用的设备唯一id
		//42.62.49.122  外网服务器
		//192.168.24.82  内网服务器
		//192.168.17.10  杜明雷
		//192.168.17.65  彭琦
//		LoginServer:"http://42.62.49.122:8080/platform"	//登陆服务器
//		LoginServer:"http://192.168.17.10:8080/platform"	//登陆服务器
//		LoginServer:"http://192.168.17.10:8080/platform"	//开发登陆服务器
        LoginServer:"http://192.168.24.82:8080/platform"	//开发登陆服务器
};