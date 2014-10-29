	var locations = <?= json_encode($coordenada);?>;
	function initialize() {
		var myLatlng = new google.maps.LatLng(<?= substr($coordenada[0]['latitude'], 0, -5) ;?>, <?= substr($coordenada[0]['longitude'], 0, -5) ;?>);
		var mapOptions = {
    		zoom: 10,
    		center: myLatlng
  		}
  		var map = new google.maps.Map(document.getElementById("mapa_base"), mapOptions);
  		setMarkers(map, locations);
	}
	
	function setMarkers(map, locations) {
  		// Add markers to the map

  		// Marker sizes are expressed as a Size of X,Y
  		// where the origin of the image (0,0) is located
  		// in the top left of the image.

  		// Origins, anchor positions and coordinates of the marker
  		// increase in the X direction to the right and in
  		// the Y direction down.
  		var image = {
    		url: "http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png",
    		// This marker is 20 pixels wide by 32 pixels tall.
    		size: new google.maps.Size(32, 32),
    		// The origin for this image is 0,0.
    		origin: new google.maps.Point(0,0),
    		// The anchor for this image is the base of the flagpole at 0,32.
    		anchor: new google.maps.Point(0, 32)
  		};
  		var image2 = {
    		url: "http://maps.google.com/mapfiles/ms/micons/red-dot.png",
    		// This marker is 20 pixels wide by 32 pixels tall.
    		size: new google.maps.Size(32, 32),
    		// The origin for this image is 0,0.
    		origin: new google.maps.Point(0,0),
    		// The anchor for this image is the base of the flagpole at 0,32.
    		anchor: new google.maps.Point(0, 32)
  		};
  		var image3 = {
    		url: "http://maps.google.com/mapfiles/ms/micons/green-dot.png",
    		// This marker is 20 pixels wide by 32 pixels tall.
    		size: new google.maps.Size(32, 32),
    		// The origin for this image is 0,0.
    		origin: new google.maps.Point(0,0),
    		// The anchor for this image is the base of the flagpole at 0,32.
    		anchor: new google.maps.Point(0, 32)
  		};
  		// Shapes define the clickable region of the icon.
  		// The type defines an HTML &lt;area&gt; element 'poly' which
  		// traces out a polygon as a series of X,Y points. The final
  		// coordinate closes the poly by connecting to the first
  		// coordinate.
  		var shape = {
      		coords: [1, 1, 1, 20, 18, 20, 18 , 1],
      		type: 'poly'
  		};
  		for (var i = 0; i < locations.length; i++) {
   			var beach = locations[i];
   			//alert(beach.longitude);
   			if(i == 0){//inicio
				var myLatLng = new google.maps.LatLng(beach.latitude, beach.longitude);
    			var marker = new google.maps.Marker({
        			position: myLatLng,
        			map: map,
        			icon: image3,
        			shape: shape,
        			title: beach.dataCaptura+"\n"+"Percorrido "+(beach.distancia < 1 ? (beach.distancia * 1000)+"m" : beach.distancia+"km")+"\n"+"Velocidade "+((beach.velocidade)+"km/h"),
        			zIndex: 3
    			});
    			//box de informações	
           		(function(marker, i) {
            	 	// add click event
                 	google.maps.event.addListener(marker, 'click', function() {
                 		infowindow = new google.maps.InfoWindow({
                    		content: beach.dataCaptura+"<br/>"+"Percorrido "+(beach.distancia < 1 ? (beach.distancia * 1000)+"m" : beach.distancia+"km")+"<br/>"+"Velocidade "+((beach.velocidade)+"km/h"),
                    	});
                   		infowindow.open(map, marker);
                   		google.maps.event.addListener(marker, 'mouseout', function(){
                   			infowindow.close();
                   		});
                 	});
            	})(marker, i);
    			//box de informações					
    		}else if(i == (locations.length - 1)){//final 
				var myLatLng = new google.maps.LatLng(beach.latitude, beach.longitude);
    			var marker = new google.maps.Marker({
        			position: myLatLng,
        			map: map,
        			icon: image2,
        			shape: shape,
        			title: beach.dataCaptura+"\n"+"Percorrido "+(beach.distancia < 1 ? (beach.distancia * 1000)+"m" : beach.distancia+"km")+"\n"+"Velocidade "+((beach.velocidade)+"km/h"),
        			zIndex: 3
    			});
    			//box de informações	
           		(function(marker, i) {
            	 	// add click event
                 	google.maps.event.addListener(marker, 'click', function() {
                 		infowindow = new google.maps.InfoWindow({
                    		content: beach.dataCaptura+"<br/>"+"Percorrido "+(beach.distancia < 1 ? (beach.distancia * 1000)+"m" : beach.distancia+"km")+"<br/>"+"Velocidade "+((beach.velocidade)+"km/h"),
                    	});
                   		infowindow.open(map, marker);
                   		google.maps.event.addListener(marker, 'mouseout', function(){
                   			infowindow.close();
                   		});
                 	});
            	})(marker, i);
    			//box de informações					
   			}else{
				var myLatLng = new google.maps.LatLng(beach.latitude, beach.longitude);
    			var marker = new google.maps.Marker({
        			position: myLatLng,
        			map: map,
        			icon: image,
        			shape: shape,
        			title: beach.dataCaptura+"\n"+"Percorrido "+(beach.distancia < 1 ? (beach.distancia * 1000)+"m" : beach.distancia+"km")+"\n"+"Velocidade "+((beach.velocidade)+"km/h"),
        			zIndex: -1
    			});
    			//box de informações	
           		(function(marker, i) {
            	 	// add click event
                 	google.maps.event.addListener(marker, 'click', function() {
                 		infowindow = new google.maps.InfoWindow({
                    		content: beach.dataCaptura+"<br/>"+"Percorrido "+(beach.distancia < 1 ? (beach.distancia * 1000)+"m" : beach.distancia+"km")+"<br/>"+"Velocidade "+((beach.velocidade)+"km/h"),
                    	});
                   		infowindow.open(map, marker);
                   		google.maps.event.addListener(marker, 'mouseout', function(){
                   			infowindow.close();
                   		});
                 	});
            	})(marker, i);
    			//box de informações	   				
   			}

  		}
	}