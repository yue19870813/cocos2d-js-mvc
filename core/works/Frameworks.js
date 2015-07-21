/********************************************************************************
  The game Frameworks
  @author ituuz 
  @date 2014-11-24
  
  The framework's summary.
********************************************************************************/


game.Frameworks = {
		DEBUG:false,
		LOG_TAG:"DEBUG",
		IS_RUNTIME:false,	
		NET_TYPE:1,		
		DESIGN_ZOOM:1,	
		DEVICE_ID:"DEVICE_ID"	
}

//init frameworks
game.Frameworks.init = function (size, logTag, sceneMed) {
	game.Facade.init(size, logTag, sceneMed);
}