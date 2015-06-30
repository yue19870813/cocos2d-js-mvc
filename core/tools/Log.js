/********************************************************************************
  The game.log
  @author ituuz 
  @date 2014-11-26
  
  Print game log.It's can help us to debug by log. 
********************************************************************************/

game._Log = {};

game._Log.debugArray = [];

game._Log.tagArray = [];

game.log = function (text, tag) {
	if (tag == "RELEASE") return;
	if (tag == undefined && game.Frameworks.LOG_TAG == "DEBUG") {
		cc.log("game: " + text);
		game._Log.debugArray.push("game:" + text);
	} else if (tag == game.Frameworks.LOG_TAG) {
		cc.log(tag + ": " + text);
		game._Log.tagArray.push(tag + ":" + text);
	}
}

//Create file with log.
game.createLogFile = function (tag) {
	var str = "";
	if (tag == undefined) {
		for (var i = 0; i < game._Log.debugArray.length; i++) {
			str += game._Log.debugArray[i] + "\n";
		}
		jsb.fileUtils.writeToFile({key:str}, "DEBUG_LOG.txt");
	} else if (tag == game.Frameworks.LOG_TAG) {
		for (var i = 0; i < game._Log.tagArray.length; i++) {
			str += game._Log.tagArray[i] + "\n";
		}
		jsb.fileUtils.writeToFile({content:str}, game.Frameworks.LOG_TAG + "_LOG.txt");
	}
}