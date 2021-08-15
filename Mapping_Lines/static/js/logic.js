// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Coordinates for each point to be used in the polyline
let line = [
    [37.6180, -122.3786],
    [30.1941, -97.6663],
    [43.6817, -79.6120],
    [40.6417, -73.7809],
    [41.921, -84.587],
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: 'blue',
    weight: 4,
    opacity: 0.5,
    dashArray: '5, 10',
    lineJoin: 'miter',
    lineCap: 'square',
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);