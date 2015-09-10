/********************************************************************************
  The game.IScene
  @author yuebinbin
  @date 2015-7-20

  IScene is the view of MVC, create your scene view to extend this class.
 ********************************************************************************/
game.IScene = cc.Scene.extend({
	ctor:function () {
		this._super();

	},
	//Use this function to send notification.
	send:function (key, obj)
	{
		game.Notification.send(key, obj);
	}
});