/********************************************************************************
  The game.IMediator
  @author yuebinbin 
  @date 2014-11-18
  
  IView is the mediator of MVC, create your model to extend this class. 
  In this mediator can get model,current mediator and rootMediator.
********************************************************************************/
game.IMediator = cc.Class.extend({
	ctor:function () {
	},
	show:function ()
	{
		throw new Error("SubClass not overwrite show function.");
	},
	getCurrMediator:function () {
		var med = game.Facade._directorMediator.currSceneMediator.currLayerMediator;
		if (med == null) {
			med = game.Facade._directorMediator.currSceneMediator.rootLayerMediator;
		}
		return med;
	},
	getRootMediator:function () {
		return game.Facade._directorMediator.currSceneMediator.rootLayerMediator;
	},
	getModel:function (cls) {
		return game.Facade._modelMap.get(cls);
	},
	//Use this function to send notification.
	send:function (key, obj)
	{
		game.Notification.send(key, obj);
	}
});