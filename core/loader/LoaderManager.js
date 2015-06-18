
game.LoaderItem = cc.Class.extend({
	type:0,
	url:"",
	key:"",
	ctor:function (_type, _url, _key) {
		this.type = _type;
		this.url = _url;
		this.key = _key;
	}
});

game.LoaderManager = cc.Class.extend({
	ctor:function () {
		
	},
	load:function (itemList, callback) {
		for (var i = 0; i < itemList.length; i++) {
			this.loadItem(itemList[i], callback);
		}
	},
	loadItem:function (item, callback) {
		setTimeout(function () {
			if (item.type == "txt") {
				var str = cc.loader.getRes(item.url);
				callback(str, item.key);
			}
		}, 10);
	}
});