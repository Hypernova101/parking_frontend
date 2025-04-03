---
layout: post
title: Google Maps Route Planner
search_exclude: true
permalink: /map/
---

<html>
  <head>
    <title>Google Maps Route Planner</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <style>
      #map {
        height: 80vh;
        width: 100%;
      }
      #controls {
        padding: 10px;
        background: #f8f8f8;
        display: flex;
        gap: 10px;
      }
      input {
        padding: 6px;
        width: 40%;
      }
      button {
        padding: 6px 12px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div id="controls">
      <input id="start" placeholder="Enter starting point" />
      <input id="end" placeholder="Enter destination" />
      <button onclick="calculateRoute()">Get Route</button>
    </div>

    <div id="map"></div>

    <!-- Load the Google Maps API with Places library -->
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_ZAbJtK2KkFT0_e1iJUNGrqDXWdGp3nU&libraries=places&callback=initMap"
      async
      defer
    ></script>

    <script>
      let map;
      let directionsService;
      let directionsRenderer;
      let trafficLayer;

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 32.7157, lng: -117.1611 }, // Default center: San Diego
          zoom: 13,
        });

        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer({ map: map });
        trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);

        // Autocomplete for inputs
        const startInput = document.getElementById("start");
        const endInput = document.getElementById("end");
        new google.maps.places.Autocomplete(startInput);
        new google.maps.places.Autocomplete(endInput);
      }

      function calculateRoute() {
        const start = document.getElementById("start").value;
        const end = document.getElementById("end").value;

        if (!start || !end) {
          alert("Please enter both start and destination.");
          return;
        }

        directionsService.route(
          {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING,
            drivingOptions: {
              departureTime: new Date(),
              trafficModel: "bestguess",
            },
          },
          (response, status) => {
            if (status === "OK") {
              directionsRenderer.setDirections(response);

              const leg = response.routes[0].legs[0];
              const info = `
                <strong>Route Info:</strong><br/>
                From: ${leg.start_address}<br/>
                To: ${leg.end_address}<br/>
                Distance: ${leg.distance.text}<br/>
                Duration (with traffic): ${leg.duration.text}
              `;

              const infoWindow = new google.maps.InfoWindow({
                content: info,
                position: leg.end_location,
              });

              infoWindow.open(map);
            } else {
              alert("Could not calculate route: " + status);
            }
          }
        );
      }
    </script>
  </body>
</html>
