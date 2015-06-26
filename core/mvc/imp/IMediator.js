
game.IMediator = cc.Class.extend({
	ctor:function () {
	},
	show:function ()
	{
		throw new Error("SubClass not overwrite show function.");
	}
});