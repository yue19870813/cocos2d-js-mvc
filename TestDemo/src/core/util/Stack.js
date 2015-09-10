/********************************************************************************
  game.Stack
  @author yuebinbin 
  @date 2014-11-18
  
  The Stack.
********************************************************************************/
game.Stack = cc.Class.extend({
	elements:null,
	ctor:function () {
		this.elements = new Array();
	},
	push:function (ele) {
		if (ele.length == 0) { 
			return -1 
		};
		this.elements.push(ele);
		return this.elements.length;
	},
	pop:function () {
		if (this.elements.length <= 0) { 
			return null 
		};
		return this.elements.pop();
	},
	top:function () {
		if (this.elements.length <= 0) { 
			return null 
		};
		return this.elements[this.elements.length - 1];
	},
	size:function () {
		return this.elements.length;
	},
	isEmpty:function () {
		if (this.elements.length > 0) {
			return false;
		} else {
			return true;
		}
	},
	clear:function () {
		this.elements = new Array();
	}
	
});