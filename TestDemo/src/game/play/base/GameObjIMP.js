//基础设计，统辖logic和node显示对象
play.gameObjID = 0;
play.GameObjIMP = cc.Class.extend({
    _baseLayer:null,//基础
    _parent:null,//
    _gameObjID:0,
    _className:null,
    _objLogic:null,
    _objNode:null,
    _nDrawTag:null,
    ctor : function(baseLayer,parent,drawTag,logic,node)
    {
        this._super();
        var self = this;
        self._gameObjID = stage.gameObjID++;
        self._baseLayer = baseLayer;
        self._parent = parent;
        self._nDrawTag = drawTag;
        self._objLogic = logic;
        self._objNode = node;
        self._className = "play.GameObjIMP";
        return true;
    },
    //提出公有方法
    getGameOjbID:function(){
    	return this._gameObjID;
    },
	getPos:function(){
		return this.getPosition();
	},
	setPos:function(pos){
		this.setPosition(pos);
	},
	getLogic:function(){
	    return this._objLogic;
	},
	getNode:function(){
	    return this._objNode;
	}
});

play.BaseNode = cc.Node.extend({
    ctor : function()
    {
        this._super();
    }
});
play.BaseLogic = cc.Class.extend({
    ctor : function()
    {
        this._super();
    }
});
