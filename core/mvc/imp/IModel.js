game.IModel = cc.Class.extend({
	
	ctor:function () {
		
	},
	subscribe:function ()
	{
		throw new Error("SubClass not overwrite subscribe function.");
	}
});