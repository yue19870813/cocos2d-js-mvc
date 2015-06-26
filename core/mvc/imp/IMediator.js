/******************************************
 * The game.IMediator£º.
 * create by SunnyYue 2014-11-18
 ******************************************/
game.IMediator = cc.Class.extend({
	ctor:function () {
	},
	show:function ()
	{
		throw new Error("SubClass not overwrite show function.");
	}
});