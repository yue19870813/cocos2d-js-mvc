/******************************************
 * 自定义 Stack 数据结构
 * create by Yue 2014-11-18
 ******************************************/
game.Stack = cc.Class.extend({
	elements:null,
	ctor:function () {
		this.elements = new Array();
	},
	//入栈
	push:function (ele) {
		if (ele.length == 0) { 
			return -1 
		};
		this.elements.push(ele);
		return this.elements.length;
	},
	//出栈
	pop:function () {
		if (this.elements.length <= 0) { 
			return null 
		};
		return this.elements.pop();
	},
	//获得栈顶元素
	top:function () {
		if (this.elements.length <= 0) { 
			return null 
		};
		return this.elements[this.elements.length - 1];
	},
	//返回栈都大小
	size:function () {
		return this.elements.length;
	},
	//判断栈是否为空
	isEmpty:function () {
		if (this.elements.length > 0) {
			return false;
		} else {
			return true;
		}
	},
	//清空栈
	clear:function () {
		this.elements = new Array();
	}
	
});