/********************************************************************************
  The game.LocalServer
  @author yuebinbin 
  @date 2015-04-19
  
  Protocol message handler
 * execute(obj):execute handler,obj is the request object.
 * save(key, obj):save data object.
 * get(key):get data object by key.
********************************************************************************/
game.LocalServer = cc.Class.extend({
	ctor:function () {
		
	},
	execute:function (obj)
	{
		throw new Error("SubClass not overwrite execute function.");
	},
	response:function (obj) 
	{
		SocketManager.prase("[" + JSON.stringify(obj) + "]");
	},
	save:function (key, obj) 
	{
		game.LocalStoreManager.setItem(key, obj);
	},
	get:function (key) 
	{
		return game.LocalStoreManager.getItem(key);
	},
	del:function (key) 
	{
		game.LocalStoreManager.deleteItem(key);
	}
});