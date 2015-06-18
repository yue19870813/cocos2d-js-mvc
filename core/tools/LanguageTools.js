/**
 * 语言工具类
 */
game.LanguageTools = {}

/**
 * 根据key获取字符串
 * @param key 字符串id
 * @returns {String} 返回最终字符串
 */
game.LanguageTools.getWords = function (key) {
	var lvo = game.StaticDataUtil.getObjById(game.Language, key);	
	var str = "请填表：" + key;
	if (lvo) {
		str = lvo.value;
	}
	//正则 替换全部
	str = str.replace(/#\$d/g, ",");
	str = str.replace(/#\$y/g,"\"");
	str = str.replace(/#\$h/g,"\n");
	return  str;
}

/**
 * 获取动态字符串
 * @param key 字符串id
 * @param param	动态参数 ["param1", "param2"] 会按顺序替换动态内容。
 * @returns {String} 返回最终字符串
 */
game.LanguageTools.getDynWords = function (key, param) {
	var lvo = game.StaticDataUtil.getObjById(game.Language, key);	
	var str = "请填表：" + key;
	if (lvo) {
		str = lvo.value;
	}
	for (var i = 0; i < param.length; i++) {
		str = str.replace("#"+ (i + 1) +"#", param[i]);
	}
	//正则 替换全部
	str = str.replace(/#\$d/g, ",");
	str = str.replace(/#\$y/g,"\"");
	str = str.replace(/#\$h/g,"\n");
	return str;
}