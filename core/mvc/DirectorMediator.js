
game.DirectorMediator = game.IMediator.extend({
	sceneMediatorStack:null,
	currSceneMediator:null,
	ctor:function (view) {
		this.currView = view;
		this.sceneMediatorStack = new game.Stack();
	},
	show:function (parent) {
	},
	//打开新场景，销毁上一个场景。
	showScene:function (mediator) {
		if (this.currSceneMediator && this.currSceneMediator.rootLayerMediator) {
			this.currSceneMediator.rootLayerMediator._pDispose();
		}
		if (this.currSceneMediator && this.currSceneMediator.currLayerMediator) {
			this.currSceneMediator.currLayerMediator._pDispose();
		}
		if (this.currSceneMediator) {
			var layMedList = this.currSceneMediator.layerMediatorList;
			for (var i = 0; i < layMedList.length; i++) {
				if (layMedList[i]) {
					layMedList[i]._pDispose();
				}
			}
		}
		this.currSceneMediator = mediator;
		this.sceneMediatorStack = new game.Stack();
		this.sceneMediatorStack.push(mediator);
		cc.director.runScene(mediator.currScene);
	},
	//打开新场景，将上一个场景入栈保存。
	pushScene:function (mediator) {
		this.currSceneMediator = mediator;
		this.sceneMediatorStack.push(mediator);
		cc.director.pushScene(mediator.currScene);
	},
	//弹出当前场景销毁，进入上一个保存的场景。
	popScene:function () {
		var pop = this.sceneMediatorStack.pop();
		var curr = this.sceneMediatorStack.top();
		this.currSceneMediator = curr;
		cc.director.popScene();
	}
});