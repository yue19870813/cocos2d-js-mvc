/**
 * 
 * 
 * */
game.NumberTools = {};

game.NumberTools.min = function (a, b) {
	if(parseInt(a) > parseInt(b))  {
		return b;
	}
	return a;
}

game.NumberTools.max = function (a, b) {
	if(parseInt(a) > parseInt(b))  {
		return a;
	}
	return b;
}