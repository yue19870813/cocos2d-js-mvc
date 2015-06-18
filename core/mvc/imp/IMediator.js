
game.IMediator = cc.Class.extend({
	ctor:function () {
	},
	show:function ()
	{
		throw new Error("子类未实现subscribe方法.");
	}
});