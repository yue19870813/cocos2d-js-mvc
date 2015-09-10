/********************************************************************************
  The DirectorMediator
  @author yuebinbin 
  @date 2014-11-18
  
  Control the scene show or hide.
********************************************************************************/
game.DirectorMediator = game.IMediator.extend({
	sceneMediatorStack:null,
	currSceneMediator:null,
	ctor:function (view) {
		this.currView = view;
		this.sceneMediatorStack = new game.Stack();
	},
	show:function (parent) {
	},
	//Open the new scene and destroy the previous.
	showScene:function (mediator) {
		if (this.currSceneMediator && this.currSceneMediator.rootLayerMediator) {
			this.currSceneMediator.rootLayerMediator._pDispose();
		}
		if (this.currSceneMediator) {
			var layMedList = this.currSceneMediator.layerMediatorList;
			while (layMedList.size() > 0) {
				var med = layMedList.pop();
				med._pDispose();
			}
		}
		this.currSceneMediator = mediator;
		this.sceneMediatorStack = new game.Stack();
		this.sceneMediatorStack.push(mediator);
		cc.director.runScene(mediator.currScene);
	},
	//Open the new scene and push the previous into the stack
	pushScene:function (mediator) {
		this.currSceneMediator = mediator;
		this.sceneMediatorStack.push(mediator);
		cc.director.pushScene(mediator.currScene);
	},
	//Pop the current scene to destroy then go to the previous scene.
	popScene:function () {
		var pop = this.sceneMediatorStack.pop();
		var curr = this.sceneMediatorStack.top();
		this.currSceneMediator = curr;
		cc.director.popScene();
	}
});