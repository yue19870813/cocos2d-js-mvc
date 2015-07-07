/********************************************************************************
  The game.IModel
  @author ituuz 
  @date 2014-11-18
  
  IView is the model of MVC, create your model to extend this class. 
********************************************************************************/
game.IModel = cc.Class.extend({
	
	ctor:function () {
		
	},
	subscribe:function ()
	{
		throw new Error("SubClass not overwrite subscribe function.");
	},
	//Use this function to send notification.
	send:function (key, obj)
	{
		game.Notification.send(key, obj);
	}
});