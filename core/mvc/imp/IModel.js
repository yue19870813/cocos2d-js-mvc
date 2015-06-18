game.IModel = cc.Class.extend({
	
	ctor:function () {
		
	},
	subscribe:function ()
	{
		throw new Error("子类未实现subscribe方法.");
	}
});