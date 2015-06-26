/******************************************
 * The game.IModel£º.
 * create by SunnyYue 2014-11-18
 ******************************************/
game.IModel = cc.Class.extend({
	
	ctor:function () {
		
	},
	subscribe:function ()
	{
		throw new Error("SubClass not overwrite subscribe function.");
	}
});