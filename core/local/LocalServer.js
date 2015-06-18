/******************************************
 * 本地服务处理：
 * 		处理消息逻辑
 * create by Yue 2015-04-19
 * execute(obj):执行处理消息逻辑，obj为request对象。
 * save(key, obj):保存数据对象
 * get(key):根据键值获取数据对象
 ******************************************/
game.LocalServer = cc.Class.extend({
	ctor:function () {
		
	},
	execute:function (obj)
	{
		throw new Error("子类必须实现execute方法");
	},
	//返回数据
	response:function (obj) 
	{
		SocketManager.prase("[" + JSON.stringify(obj) + "]");
	},
	//保存数据
	save:function (key, obj) 
	{
		game.LocalStoreManager.setItem(key, obj);
	},
	//获取数据
	get:function (key) 
	{
		return game.LocalStoreManager.getItem(key);
	},
	//删除数据
	del:function (key) 
	{
		game.LocalStoreManager.deleteItem(key);
	}
});