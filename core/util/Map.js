/******************************************
 * 自定义 Map 数据结构
 * create by Yue 2014-11-13
 ******************************************/
game.Map = cc.Class.extend({
	elements:null,
	ctor:function () {
		this.elements = new Array();
	},
	//插入元素
	put:function(_key, _value) {
		var isExist = this.contains(_key);
		if (isExist) {
			this.remove(_key);
		}
		this.elements.push( {
			key : _key,
			value : _value
		});
	},
	//获得元素
	get:function(_key) {
		try {
			for (i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					return this.elements[i].value;
				}
			}
		} catch (e) {
			return null;
		}
	},
	//删除元素
	remove:function(_key) {
		var bln = false;
		try {
			for (i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					this.elements.splice(i, 1);
					return true;
				}
			}
		} catch (e) {
			bln = false;
		}
		return bln;
	},
	//判断MAP中是否含有指定KEY的元素
	contains:function(_key) {
		var bln = false;
		try {
			for (i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					bln = true;
				}
			}
		} catch (e) {
			bln = false;
		}
		return bln;
	},
	//获取MAP元素个数
	size:function() {
		return this.elements.length;
	},
	//判断MAP是否为空
	isEmpty:function() {
		return (this.elements.length < 1);
	},
	//删除MAP所有元素
	clear:function() {
		this.elements = new Array();
	}
});