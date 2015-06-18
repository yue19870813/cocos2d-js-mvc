
game.LayerMediator = game.IMediator.extend({
	currView:null,
	backBtn:null,
	mask:null,
	isRoot:true,
	ctor:function (view) {
		this.currView = view;
	},
	show:function (parent) {
		//如果是rootlayer不加蒙板。
		if (this.isRoot) return;	
		var size = cc.winSize;
		this.mask = new cc.LayerColor(cc.color(0,0,0,200), size.width, size.height);
		parent.addChild(this.mask);
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: this.onTouchBegan
		}, this.mask);
	},
	onTouchBegan:function(touch, event) {
		game.log("点击在非功能区了，可以播放一些非功能特效。");
		//处理需要的逻辑
		return true;
	},
	init:function () {
		throw new Error("子类必须实现init方法，在该方法内注册监听。");
	},
	freshen:function () {
		game.log("freshen");
	},
	//私有函数子类不能进行重写
	_pDispose:function () {
		var that = this;
		that.destroy();
		that.currView.removeFromParent(true);
		that.mask && this.mask.removeFromParent(true);
	},
	destroy:function () {
		throw new Error("子类必须实现destroy方法，在该方法内删除监听。");
	}
});

