play.RunScene = game.IScene.extend({
	ctor:function (){
		this._super();

	}
});

play.RunLayer = game.IView.extend({
	_tf:null,
	_intervalID:0,
	_index:0,
	ctor:function () {
		this._super();

		this._tf = new cc.LabelTTF.create("Run Layer", "Arial", 20);
		this._tf.x = 400;
		this._tf.y = 300;
		this.addChild(this._tf);
		this.openUpdate(500);
		return true;
	},
	//time 毫秒
	openUpdate:function(time){
		game.log("####--openUpdate--time>"+time);
		this._index = 0;
		var self = this;
		this._intervalID = setInterval(
			function(){
				self.updateInterval(self,time);
			},
			time
		);
	},
	stopUpdate:function(){
		game.log(cc.textureCache.getCachedTextureInfo());
		game.log("####--stopUpdate-");
		clearInterval(this._intervalID);
	},
	updateInterval:function (self,dt) {
		self._index ++;
		game.log("####--stopUpdate-self._index>"+self._index);
		if(self._index > 5)
		{
			self.stopUpdate();
		}
	}
});