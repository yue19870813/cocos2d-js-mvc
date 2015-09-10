game.UIHelper = cc.Class.extend({
    _fileArr:null,
    _ignore:null,
    ctor:function () {
        this._ignore = game.Frameworks.UI_IGNORE;
    },
    doLayout:function (jsonFile) {
        var size = cc.winSize;
        var jsonStr = cc.loader.getRes(jsonFile);
        var str = JSON.stringify(jsonStr["Content"]["Content"]["UsedResources"]);
        str = str.substring(1, str.length - 1);
        this._fileArr = str.split(",");
        var json = ccs.load(jsonFile);
        var node = json.node;
        node.setContentSize(size);
        ccui.helper.doLayout(node);
        return node;
    },
    clearRes:function () {
        for (var i = 0; i < this._fileArr.length; i++) {
            var str = this._fileArr[i].substring(1, this._fileArr[i].length - 1);
            if (str.indexOf(this._ignore) == -1) {
                cc.textureCache.removeTextureForKey("res/ui/" + str);
            }
        }
    }
});