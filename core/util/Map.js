/********************************************************************************
  game.Map
  @author ituuz 
  @date 2014-11-13
  
  The Map.
********************************************************************************/
game.Map = cc.Class.extend({
	elements:null,
	ctor:function () {
		this.elements = new Array();
	},
	//Insert element.
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
	//Get element.
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
	//Delete element.
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
	//To estimate whether the map contains element that specify key.
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
	//Get the map size.
	size:function() {
		return this.elements.length;
	},
	//To estimate whether the map is null.
	isEmpty:function() {
		return (this.elements.length < 1);
	},
	//Remove all the elements.
	clear:function() {
		this.elements = new Array();
	}
});