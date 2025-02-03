let lat = 0;
let long = 0;
let latdom = document.getElementById("latitude");
let longdom = document.getElementById("longitude");

navigator.geolocation.getCurrentPosition(position => {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
    lat = position.coords.latitude;
    long = position.coords.longitude;latdom.innerHTML = lat;
    longdom.innerHTML = long;
    
}, error => {
    console.error("Error getting location: ", error);
});
