	function _getLocation(position)
	{
		$ROUTRASH.MAPS.init(position.coords.latitude,position.coords.longitude);
	}
	function _currentLocation()
	{
		if(navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition(_getLocation);
		}
	}
$(document).on('ready',function(){
	_currentLocation();
});
