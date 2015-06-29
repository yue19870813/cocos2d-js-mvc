/********************************************************************************
  The game.IMediator
  @author ituuz 
  @date 2014-11-18
  
  IView is the mediator of MVC, create your model to extend this class. 
********************************************************************************/
game.IMediator = cc.Class.extend({
	ctor:function () {
	},
	show:function ()
	{
		throw new Error("SubClass not overwrite show function.");
	}
});