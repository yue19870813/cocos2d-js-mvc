/******************************************
 * 静态数据工具类：
 * create by Yue 2014-11-24
 ******************************************/
game.StaticDataUtil = (function(){
	var unique;
	unique = new _StaticDataUtile();
	return unique;
})();

function _StaticDataUtile() {

}

game.StaticDataUtil._dataMap = null;

game.StaticDataUtil.init = function () {
	game.StaticDataUtil._dataMap = new game.Map();
}

game.StaticDataUtil.add = function (key, str) {
	var arr = str.split("\n");
	var title = arr[0].split(",");
	var json = "[";
	for (var i = 1; i < arr.length; i++) {
		var temp = arr[i].split(",");
		if (temp[0] == "" || temp[0] == undefined || temp[0] == "\r") break;
		json += "{";
		for (var j = 0; j < title.length; j++) {
			if (title[j] == "") break;
			json += "\"" + title[j] + "\":\"" + temp[j] + "\", ";
		}
		json = json.substring(0, json.length - 2);
		json += "},";
	}
 	json = json.substring(0, json.length - 1);
	json += "]";
	var objArr = JSON.parse(json);
	var objList = new Array();
	for (var k = 0; k < objArr.length; k++) {
		objList.push(objArr[k]);
	}
	game.StaticDataUtil._dataMap.put(key, objList);
}

/**
 * 根据key和id获取数据对象
 * @return Object
 */
game.StaticDataUtil.getObjById = function (key, id) {
	var array = game.StaticDataUtil._dataMap.get(key);
	if (array == null) {
		return null;
	}
	for (var i = 0; i < array.length; i++) {
		if (array[i].id == id) {
			return array[i];
		}
	}
	return null;
}

/**
 * 根据key获取数据对象集合
 * @return Array
 */
game.StaticDataUtil.getObjsByKey = function (key) {
	return game.StaticDataUtil._dataMap.get(key);
}

/**
 * 根据技能组件id和技能等级获取技能数据
 */
game.StaticDataUtil.getSkillDataByGroupIdAndLv = function(groupId,level){
	var skills = game.StaticDataUtil.getObjsByKey(game.Skill_data);
	var skillVO = null;
	for(var i=0;i<skills.length;i++){
		skillVO = skills[i];
		if(skillVO.group == groupId && skillVO.level == level) break;
	}
	return skillVO;
}


