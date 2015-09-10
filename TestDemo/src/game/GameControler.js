/******************************************
 * 游戏运行逻辑控制类
 * create by Yue 2014-11-13
 ******************************************/
//单例
var GameControler = (function(){
	game.log("GameControler init.");
	var unique;
	unique = new _GameControler();
	return unique;
})();

//私有构造方法
function _GameControler () {

}

//注册model
GameControler.registModel = function () {
	game.Facade.registerModel(model.UserModel, new model.UserModel());	//玩家数据
}

//整体游戏监听
GameControler.gameScout = function () {

}

//网络异常
GameControler.netError = function (eve) {
	SocketManager.reSend();
}


