/**
 * Objeto global
 */
$ROUTRASH={};

/**
 * Submodulo de maps
 */
$ROUTRASH.MAPS=(function()
{
	/***/
	var ruta=Array();
	var rutas=Array();


	/**
	 * Marcado de ruta
	 */
	function _listen()
	{
		google.maps.event.addListener(map, 'click', function(event) {
    		_placeMarker(event.latLng);
    		lineas = new google.maps.Polyline({
        		path: ruta,
         		map: map,
         		strokeColor: '#222000',
         		strokeWeight: 4,
         		strokeOpacity: 0.6,
         		clickable: false
    		});
  		});
	}
	

	function _placeMarker(location)
	{
 		pos=ruta.length;
  		ruta[pos]=location;
	}

	/**
	 *
	 */
	function init(latitude,longitude)
	{
		console.log(latitude);
		var mapOptions={
		center: new google.maps.LatLng(latitude,longitude),
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.ROADMAPS
		};
		map=new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		//_listen();
	}

	return{
		init:init,
		rutas:rutas
	};
})();

/**
 * Submodulo de AJAX
 */
$ROUTRASH.AJAX=(function()
{
	function getRoutes()
	{
		$.ajax({
			url: "",
			success:function(data)
			{
				$ROUTRASH.MAPS.rutas=data;
			}
		});
	}
})();
