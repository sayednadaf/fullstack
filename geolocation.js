
var currentlocationDiv = document.getElementById("currentlocation")

getCurrentLocation = function(){
    navigator.geolocation.getCurrentPosition(successInFinding,failInFinding)
}

function successInFinding(location){
    var lat = location.coords.latitude
    var lon = location.coords.longitude

    currentlocationDiv.innerHTML = lat +","+ lon
}