/********************************************************************************
  The game.DataTools
  @author yuebinbin 
  @date 2015-6-29
  
  IView is the view of MVC, create your scene view to extend this class. 
 ********************************************************************************/
game.DataTools = {};

/**
 * Get current date. 
 * @returns {String} yyyy-mm-dd
 */
//1900, month（0~11）
game.DataTools.getCurrData = function () {
	var myDate = new Date();
	var yy = myDate.getYear() + 1900;  
	var mm = myDate.getMonth() + 1;  
	var dd = myDate.getDate(); 
	return yy + "-" + mm + "-" + dd;

}

/**
 * Get current month
 * @returns {Number} month
 */
game.DataTools.getCurrMonth = function () {
	var myDate = new Date();
	return myDate.getMonth() + 1;;
}

/**
 * Get specify month's days
 * @param month	month
 * @returns {Number} days
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
 * Get current month's days
 * @returns	{Number} days
 */
game.DataTools.getCurrMonthDays = function () {
	return game.DataTools.getDaysByMonth(game.DataTools.getCurrMonth());
}

