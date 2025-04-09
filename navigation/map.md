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
      body {
        margin: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f7fa;
      }
      #app {
        display: flex;
        flex-direction: row;
        height: 100vh;
      }
      #sidebar {
        width: 300px;
        padding: 20px;
        background: black;
        border-right: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      #sidebar h2 {
        margin-top: 0;
      }
      .info-box {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 15px;
        margin-bottom: 20px;
        background-color:rgb(0, 0, 0);
      }
      .button-primary {
        background-color: #357edd;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        width: 100%;
      }
      #map {
        flex-grow: 1;
      }
      .slider-group {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 10px;
      }
      .slider-group label {
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <div id="sidebar">
        <div>
          <h2>Smart Parking Info</h2>
          <div class="info-box">
            <p><strong>Route Planner</strong></p>
            <input id="start" placeholder="Enter starting point" style="margin-bottom:10px; width:100%; padding:8px;" />
            <input id="end" placeholder="Enter destination" style="margin-bottom:10px; width:100%; padding:8px;" />
            <div class="slider-group">
              <label id="radiusLabel">Radius: 1 mile</label>
              <input type="range" id="radiusRange" min="0.5" max="5" step="0.5" value="1" oninput="updateRadiusLabel(this.value)" />
            </div>
            <button class="button-primary" onclick="calculateRoute()">Get Route</button>
            <button class="button-primary" style="margin-top: 10px; background-color:#444;" onclick="toggleHeatmap()">Toggle Heatmap</button>
          </div>
        </div>
        <div style="font-size: 13px; color: #555; text-align: center;">Built with Google Maps API</div>
      </div>
      <div id="map"></div>
    </div>

    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_ZAbJtK2KkFT0_e1iJUNGrqDXWdGp3nU&libraries=places,visualization&callback=initMap"
      async
      defer
    ></script>

    <script>
      let map;
      let directionsService;
      let directionsRenderer;
      let trafficLayer;
      let heatmap;
      let searchRadiusCircle;
      let heatmapData = [];
      let parkingPlaces = [];
      let markers = [];
      let searchRadiusMeters = 1609; // Default 1 mile

      function updateRadiusLabel(val) {
        document.getElementById("radiusLabel").innerText = `Radius: ${val} mile${val > 1 ? 's' : ''}`;
        searchRadiusMeters = val * 1609.34;
      }

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 36.7783, lng: -119.4179 },
          zoom: 6
        });

        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer({ map: map });
        trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);

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
              findAndStoreParkingSpots(leg.end_location);
            } else {
              alert("Could not calculate route: " + status);
            }
          }
        );
      }

      function findAndStoreParkingSpots(location) {
        const service = new google.maps.places.PlacesService(map);
        const request = {
          location: location,
          radius: searchRadiusMeters,
          type: ["parking"],
        };

        if (searchRadiusCircle) {
          searchRadiusCircle.setMap(null);
        }

        searchRadiusCircle = new google.maps.Circle({
          strokeColor: "#007bff",
          strokeOpacity: 0.6,
          strokeWeight: 2,
          fillColor: "#007bff",
          fillOpacity: 0.15,
          map: map,
          center: location,
          radius: searchRadiusMeters
        });

        markers.forEach(marker => marker.setMap(null));
        markers = [];

        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            parkingPlaces = results.filter(place => place.geometry && place.geometry.location);
            heatmapData = parkingPlaces.map(place => place.geometry.location);

            parkingPlaces.forEach(place => {
              const marker = new google.maps.Marker({
                position: place.geometry.location,
                map: map,
                icon: "http://maps.google.com/mapfiles/ms/icons/parkinglot.png",
                title: place.name
              });
              markers.push(marker);
            });

            map.fitBounds(searchRadiusCircle.getBounds());

            if (heatmap) {
              heatmap.setMap(null);
            }

            heatmap = new google.maps.visualization.HeatmapLayer({
              data: heatmapData,
              radius: 30,
              map: map
            });
          } else {
            console.error("Nearby parking search failed:", status);
          }
        });
      }

      function toggleHeatmap() {
        if (heatmapData.length === 0) {
          alert("No heatmap data available yet. Please get a route first.");
          return;
        }

        if (!heatmap) {
          heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData,
            radius: 30
          });
        }

        heatmap.setMap(heatmap.getMap() ? null : map);
      }
    </script>
  </body>
</html>
