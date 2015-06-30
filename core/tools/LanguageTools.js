/********************************************************************************
  The game.LanguageTools
  @author ituuz 
  @date 2014-11-26
  
  Static data language utils. It can get string from file to show in UI. 
********************************************************************************/
game.LanguageTools = {}

/**
 * Get string by key.
 * @param key string key
 * @returns {String} String from file data.
 */
game.LanguageTools.getWords = function (key) {
	var lvo = game.StaticDataUtil.getObjById(game.Language, key);	
	var str;
	if (lvo) {
		str = lvo.value;
	} else {
		str = "Non-existent:" + key;
	}
	str = str.replace(/#\$d/g, ",");
	str = str.replace(/#\$y/g,"\"");
	str = str.replace(/#\$h/g,"\n");
	return  str;
}

/**
 * Get dynamic string by key
 * @param key:string key
 * @param param:dynamic param ["param1", "param2"] It can be replace param by seqence.
 * @returns {String} String from file data.
 */
game.LanguageTools.getDynWords = function (key, param) {
	var lvo = game.StaticDataUtil.getObjById(game.Language, key);	
	var str;
	if (lvo) {
		str = lvo.value;
	} else {
		str = "Non-existent:" + key;
	}
	for (var i = 0; i < param.length; i++) {
		str = str.replace("#"+ (i + 1) +"#", param[i]);
	}
	str = str.replace(/#\$d/g, ",");
	str = str.replace(/#\$y/g,"\"");
	str = str.replace(/#\$h/g,"\n");
	return str;
}