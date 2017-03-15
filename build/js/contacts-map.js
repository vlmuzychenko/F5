"use strict";

$(function () {
   var mapContacts;

   function initMap() {
      var style = [{ "featureType": "all", "elementType": "all", "stylers": [{ "saturation": -100 }, { "gamma": 0.5 }] }];
      var office = new google.maps.LatLng(50.4411915, 30.5012787);
      var mapContactsOptions = {
         zoom: 17,
         center: office,
         disableDefaultUI: true
      };

      mapContacts = new google.maps.Map(document.getElementById('map'), mapContactsOptions);

      var mapContactsMarker = 'img/marker.png';
      var markerContacts = new google.maps.Marker({
         position: office,
         map: mapContacts,
         icon: mapContactsMarker
      });
      mapContacts.setOptions({ styles: style });
   }
   initMap();
});