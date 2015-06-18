/**
 * 翻页组件
 * 
 * */
game.ScrollView = ccui.Layout.extend({
	_innerView:null,
	ctor:function () {
		this._super();
		this._innerView = new game.InnerView();
		this.addChild(this._innerView);
	},
	setPageSize:function (size) {
		this._innerView.setPageSize(size);
	},
	addPage:function (node) {
		this._innerView.addPage(node);
	},
	getCurPageIndex:function () {
		return this._innerView.getCurPageIndex();
	},
	scrollToPage:function(idx) {
		this._innerView.scrollToPage(idx);
	},
	gotoPage:function (idx) {
		this._innerView.gotoPage(idx);
	}
});

game.InnerView = cc.Layer.extend({
	_size:null,	//设置page尺寸
	_currPageIndex:0, //当前page
	_pageCount:0, //当前page
	ctor:function () {
		this._super();
	},
	setPageSize:function (size) {
		this._size = size;
	},
	addPage:function (node) {
		var subLayout = new ccui.Layout();
		subLayout.setSize(this._size);
		subLayout.setClippingEnabled(true);
		subLayout.addChild(node);
		subLayout.x = this._pageCount * this._size.width;
		this.addChild(subLayout);
		this._pageCount++;
	},
	getCurPageIndex:function () {
		return this._currPageIndex;
	},
	scrollToPage:function (idx) {
		var retval = idx - this._currPageIndex;
		var num = Math.abs(retval);
		var actionBy = cc.moveBy(0.5 * num, cc.p(-this._size.width * retval, 0));
		this.runAction(actionBy);
		this._currPageIndex = idx;
	},
	gotoPage:function (idx) {
		var retval = idx - this._currPageIndex;
		this.x = -this._size.width * retval;
		this._currPageIndex = idx;
	}
});