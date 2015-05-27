var map;
function loadMap() {
  var mapOptions={
      zoom: 11,
      center: new google.maps.LatLng(40.748817,-73.985428)
  };
    
   var mapid=document.getElementById('map');
    
   map=new google.maps.Map(mapid,mapOptions);
  }

google.maps.event.addDomListener(window,'load',loadMap());
