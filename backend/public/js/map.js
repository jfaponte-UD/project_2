// Jhonattan Aponte - 20212578062
// Laura Aponte - 20212578082

const map = L.map('map').setView([4.579583235006287, -74.15714591958991], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const addMarkerToMap = (location) => {
    L.marker(location).addTo(map);
};
// using Method get to get all elements in this case all bikes.
fetch('bikes/api')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // convert the response in a json to understand the obj
        return response.json();
    })
    .then(data => {
        console.log(data.bikes);
        console.log(typeof(data.bikes));


        // print all markers in the map
        for (const bikesKey of data.bikes) {
            console.log(bikesKey)
            console.log(bikesKey.location)
            addMarkerToMap(bikesKey.location)
        }


    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

