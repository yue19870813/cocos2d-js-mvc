/******************************************
 * UI工具类
 * create by Yue 2014-11-26
 ******************************************/
game.ViewTools = {};

/**
 * ccui.Widget适配方法(静态方法)
 * 		统一对游戏ui的注册点进行修改
 * 		根据当前屏幕尺寸对ui进行缩放
 */
game.ViewTools.adapter = function (widget) {
	//修改注册点
	widget.anchorX = 0.5;
	widget.anchorY = 0.5;
}

game.ViewTools.zoom = function (widget) {
	var size = cc.winSize;
	
	widget.anchorX = 0.5;
	widget.anchorY = 0.5;
	
	widget.scaleX = game.Facade.zoom;
	widget.scaleY = game.Facade.zoom;
	
	widget.x = size.width/2;
	widget.y = size.height/2;
}
