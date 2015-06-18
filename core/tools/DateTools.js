/**
 * 日期工具类
 */
game.DataTools = {};

/**
 * 获得当前日期 
 * @returns {String} yyyy-mm-dd
 */
//时间戳是1900，月（0~11）
game.DataTools.getCurrData = function () {
	var myDate = new Date();
	var yy = myDate.getYear() + 1900;  
	var mm = myDate.getMonth() + 1;  
	var dd = myDate.getDate(); 
	return yy + "-" + mm + "-" + dd;

}

/**
 * 获得当前月份
 * @returns {Number} 月份
 */
game.DataTools.getCurrMonth = function () {
	var myDate = new Date();
	return myDate.getMonth() + 1;;
}

/**
 * 获得指定月份天数
 * @param month	月份
 * @returns {Number} 天数
 */
game.DataTools.getDaysByMonth = function (month) {
	var myDate = new Date();
	var yy = myDate.getYear() + 1900;
	var days = 0;
	if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
		return days = 31;
	}
	else if(month == 2) {
	    if(yy % 4 == 0 && yy % 100 != 0 || yy % 400 == 0) {
	    	return days = 29;
		}
	    else {
	    	return days = 28;
		}
	} else if(month == 4 || month == 6 || month == 9 || month == 11) {
		return days = 30;
	} else  {
		return days = 0;
	}
}

/**
 * 获得当前月份天数
 * @returns	{Number} 天数
 */
game.DataTools.getCurrMonthDays = function () {
	return game.DataTools.getDaysByMonth(game.DataTools.getCurrMonth());
}

