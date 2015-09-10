model.UserModel = game.IModel.extend({
    ctor:function () {
        this._super();
	},
	init:function ()
	{
        game.SocketManager.register(99, this.test);
	},
	test:function (res) {

	}
});