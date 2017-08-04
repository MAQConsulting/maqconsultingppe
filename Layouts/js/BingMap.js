/*jslint plusplus: true */
/*globals VELatLong,VEMap,VEShape,VEShapeType,VEShapeLayer,VERouteOptions,VERouteDistanceUnit,watermarktext_blur*/
var map = null, oLatLng = { lat: 47.633082999999985, lng: -122.13328600000006 }, oMarker;
var sAddress = "15446 Bel-Red Road,<br/>Suite 201 Redmond,<br/>WA 98052(425) 526 5399";
var pushPinLayer = null, directionsDisplay;
try {
    function getMap() {
        "use strict";
        map = new google.maps.Map(document.getElementById('mapviewer'), {
            zoom: 13,
            center: oLatLng
        });
        oMarker = new google.maps.Marker({
            position: oLatLng,
            map: map,
            title: 'MAQ Software\n' + sAddress,
            animation: google.maps.Animation.DROP
        });
    }
    getMap();

    /*changes for the get directions functionality*/
    function resetFields() {
        "use strict";
        getMap();
        document.getElementById('directionInput').value = '';
        document.getElementById("directions").innerHTML = '';
        watermarktext_blur(document.getElementById('directionInput'));
    }

    function getRouteTo(oLatLng, input) {
        "use strict";
        if ($('#input').hasClass("maqwatermark")) {
            return;
        }
        if (input && input !== "") {
        }
        var directionsService = new google.maps.DirectionsService;
        if (!directionsDisplay) {
            directionsDisplay = new google.maps.DirectionsRenderer;
        }
        directionsDisplay.setMap(map);
        directionsService.route({
            origin: input,
            destination: oLatLng,
            travelMode: 'DRIVING'
        }, function (response, status) {
            $("#directions").html('');
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                directionsDisplay.setPanel(document.getElementById('directions'));
            } else {
                directionsDisplay.setMap(null);
                getMap();
                $("#directions").html('Unable to find a route for the location you entered. Please try again.');
            }
        });

        $('#directions').css({
            "display": "block"
        });
    }
} catch (ignore) { }