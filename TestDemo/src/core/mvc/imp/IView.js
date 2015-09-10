/********************************************************************************
  The game.IView
  @author yuebinbin 
  @date 2015-6-29
  
  IView is the view of MVC, create your layer view to extend this class. 
 ********************************************************************************/
game.IView = cc.Layer.extend({
   	ctor:function () {
   		this._super();
   		return true;
   	},
   	//Use this function to send notification.
   	send:function (key, obj)
   	{
   		game.Notification.send(key, obj);
   	}
});