$(function() {

    //set your google maps parameters
    var latitude = 40.7412541,
        longitude = -74.0040725,
        map_zoom = 14;

    //set google map options
    var map_options = {
            center: new google.maps.LatLng(latitude, longitude)
//            zoom: map_zoom,
//            panControl: false,
//            zoomControl: false,
//            mapTypeControl: false,
//            streetViewControl: false,
//            mapTypeId: google.maps.MapTypeId.ROADMAP,
//            scrollwheel: false
        }
        //inizialize the map
    var map = new google.maps.Map(document.getElementById('google-container'), map_options);
    console.log(map);
//    //add a custom marker to the map
//    var marker = new google.maps.Marker({
//        position: new google.maps.LatLng(latitude, longitude),
//        map: map,
//        visible: true,
//        icon: marker_url,
//    });

});
